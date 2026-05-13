import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { COLORS, SCREENS } from '@/constant';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppScreen from '@/components/AppScreen';
import {
  useGetLocations,
  LocationSuggestionResponse,
  PlaceSuggestion,
} from '@/hooks/useGetLocations';
import { useGooglePlaceDetails } from '@/hooks/useGooglePlaceDetails';

const steps = [
  { id: 1, label: 'Fetching URL content' },
  { id: 2, label: 'Parsing location data' },
  { id: 3, label: 'Finding similar places' },
  { id: 4, label: 'Enriching place details' },
];

type SpecificPlaceDetail = {
  name: string;
  address: string;
  lat: number;
  lng: number;
  image: string | null;
};

type EnrichedPlaceSuggestion = PlaceSuggestion & {
  details: SpecificPlaceDetail | null;
  detailError?: string | null;
};

type EnrichedLocationResponse = LocationSuggestionResponse & {
  places: EnrichedPlaceSuggestion[];
};

const ProcessingScreen = ({ route }: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const url: string = route?.params?.url ?? '';

  const { getLocations } = useGetLocations();
  const { getLocationDetail } = useGooglePlaceDetails();

  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const progressRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hasStartedRef = useRef(false);

  const getStepFromProgress = (value: number) => {
    if (value >= 75) return 3;
    if (value >= 50) return 2;
    if (value >= 25) return 1;
    return 0;
  };

  const animateProgressTo = (target: number) => {
    return new Promise<void>(resolve => {
      const safeTarget = Math.min(Math.max(target, 0), 100);

      if (progressRef.current >= safeTarget) {
        resolve();
        return;
      }

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      timerRef.current = setInterval(() => {
        const current = progressRef.current;

        if (current >= safeTarget) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }

          resolve();
          return;
        }

        const next = Math.min(current + 2, safeTarget);

        progressRef.current = next;
        setProgress(next);
        setActiveStep(getStepFromProgress(next));
      }, 35);
    });
  };

  const getPlaceSearchQuery = (place: PlaceSuggestion) => {
    return [place.place, place.city, place.country].filter(Boolean).join(' ');
  };

  const enrichPlacesWithDetails = async (
    result: LocationSuggestionResponse,
  ): Promise<EnrichedLocationResponse> => {
    const places = Array.isArray(result.places) ? result.places : [];

    if (!places.length) {
      await animateProgressTo(90);

      return {
        ...result,
        places: [],
      };
    }

    const enrichedPlaces: EnrichedPlaceSuggestion[] = [];

    for (let index = 0; index < places.length; index++) {
      const place = places[index];

      try {
        const query = getPlaceSearchQuery(place);

        const details = await getLocationDetail(query);

        const specificDetails: SpecificPlaceDetail = {
          name: details?.name || place.place || '',
          address: details?.address || '',
          lat: Number(details?.lat || place.lat || 0),
          lng: Number(details?.lng || place.lng || 0),
          image: details?.photos?.[0]?.url || null,
        };

        enrichedPlaces.push({
          ...place,
          lat: specificDetails.lat,
          lng: specificDetails.lng,
          details: specificDetails,
          detailError: null,
        });
      } catch (err: any) {
        enrichedPlaces.push({
          ...place,
          details: null,
          detailError:
            err?.response?.data?.error?.message ||
            err?.message ||
            'Failed to fetch place details.',
        });
      }

      const detailProgress =
        60 + Math.round(((index + 1) / places.length) * 30);

      await animateProgressTo(detailProgress);
    }

    return {
      ...result,
      places: enrichedPlaces,
    };
  };

  useEffect(() => {
    const runLocationDetection = async () => {
      try {
        if (hasStartedRef.current) return;

        hasStartedRef.current = true;

        if (!url?.trim()) {
          throw new Error('No URL or place text found.');
        }

        await animateProgressTo(15);

        // Step 1: Fetch URL + metadata using hook
        await animateProgressTo(25);

        // Step 2: Get AI location suggestions
        const locationResult = await getLocations(url);
        console.log('locationResult', locationResult);

        await animateProgressTo(55);

        // Step 3 + 4: Get selected/specific Google details for every place
        const enrichedResult = await enrichPlacesWithDetails(locationResult);

        console.log('enrichedResult', enrichedResult);

        await animateProgressTo(100);

        navigation.replace(SCREENS.ImportResultsScreen, {
          result: enrichedResult,
          url,
        });

  
      } catch (err: any) {
        const message =
          err?.response?.data?.error?.message ||
          err?.message ||
          'Failed to analyze location.';

        await animateProgressTo(100);

        Alert.alert('Error', message, [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]);
      }
    };

    runLocationDetection();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [url, getLocations, getLocationDetail, navigation]);

  const displayUrl = url.length > 45 ? url.slice(0, 42) + '...' : url;

  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.linkBox}>
          <View style={styles.dot} />
          <Text style={styles.linkText}>
            {displayUrl || 'Analyzing URL...'}
          </Text>
        </View>

        <View style={styles.progressWrap}>
          <View style={styles.circle}>
            <Text style={styles.percent}>{progress}%</Text>
            <Text style={styles.sub}>analyzing</Text>
          </View>
        </View>

        <Text style={styles.title}>Analyzing destination</Text>

        <Text style={styles.desc}>
          Hang tight while we extract and verify your location data
        </Text>

        <View style={styles.card}>
          {steps.map((item, index) => {
            const isDone = index < activeStep;
            const isActive = index === activeStep;

            return (
              <View key={item.id} style={styles.stepRow}>
                <View
                  style={[
                    styles.stepIcon,
                    isDone && styles.done,
                    isActive && styles.active,
                  ]}
                />

                <View style={{ flex: 1 }}>
                  <Text style={[styles.stepText, isDone && styles.doneText]}>
                    {item.label}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </AppScreen>
  );
};

export default ProcessingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    alignItems: 'center',
    paddingTop: 80,
  },
  linkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 8,
  },
  linkText: {
    fontSize: 12,
    color: '#6B7280',
  },
  progressWrap: {
    marginTop: 40,
    alignItems: 'center',
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 10,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percent: {
    fontSize: 26,
    fontWeight: '700',
  },
  sub: {
    fontSize: 12,
    color: '#8B8CA7',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
  },
  desc: {
    textAlign: 'center',
    marginTop: 6,
    color: '#8B8CA7',
    paddingHorizontal: 40,
  },
  card: {
    marginTop: 30,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  stepIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E5E7EB',
    marginRight: 10,
  },
  active: {
    backgroundColor: COLORS.primary,
  },
  done: {
    backgroundColor: '#10B981',
  },
  stepText: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  doneText: {
    color: '#111827',
    fontWeight: '500',
  },
});
