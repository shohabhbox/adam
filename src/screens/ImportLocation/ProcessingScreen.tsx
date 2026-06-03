import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { COLORS, SCREENS } from '@/constant';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppScreen from '@/components/AppScreen';

const BASE_URL = 'https://pilotiq.hboxdigital.com/api/v1/public';
const POLL_INTERVAL_MS = 3000;
const POLL_MAX_ATTEMPTS = 100;

const URL_STEPS = [
  { id: 1, label: 'Fetching URL content' },
  { id: 2, label: 'Parsing location data' },
  { id: 3, label: 'Finding similar places' },
  { id: 4, label: 'Enriching place details' },
];

const TEXT_STEPS = [
  { id: 1, label: 'Reading your input' },
  { id: 2, label: 'Identifying location' },
  { id: 3, label: 'Finding similar places' },
  { id: 4, label: 'Enriching place details' },
];

const isUrl = (value: string) => /^https?:\/\//i.test(value.trim());

const mapPlaces = (rawPlaces: any[]) =>
  rawPlaces.map((item: any) => {
    const gd = item.google_place_details;
    const details = gd
      ? {
          name: String(gd.place || item.place || ''),
          address: String(gd.shortAddress || ''),
          lat: Number(gd.lat || item.lat || 0),
          lng: Number(gd.lng || item.lng || 0),
          image: gd.image || null,
        }
      : {
          name: String(item.place || ''),
          address: [item.city, item.country].filter(Boolean).join(', '),
          lat: Number(item.lat || 0),
          lng: Number(item.lng || 0),
          image: null,
        };

    return {
      place: String(item.place || ''),
      category: String(item.category || ''),
      city: String(item.city || ''),
      country: String(item.country || ''),
      confidence: String(item.confidence || '0%'),
      lat: Number(item.lat || 0),
      lng: Number(item.lng || 0),
      reason: String(item.reason || ''),
      details,
      detailError: null,
    };
  });

const pollJob = (token: string): Promise<any> =>
  new Promise((resolve, reject) => {
    console.log('Starting to poll for async job with token:', token);
    const url = `${BASE_URL}/location-suggestions/async/${token}`;
    let attempts = 0;
    const id = setInterval(async () => {
      attempts += 1;
      try {
        const res = await axios.get(url, {
          headers: { Accept: 'application/json' },
        });
        const data = res.data?.data;
        const status = data?.status;

        console.log('status', status);


        if (status === 'completed') {
          clearInterval(id);
          resolve(data);
        } else if (status === 'failed') {
          clearInterval(id);
          reject(
            new Error(data?.error || res.data?.message || 'Analysis failed.'),
          );
        } else if (attempts >= POLL_MAX_ATTEMPTS) {
          clearInterval(id);
          reject(new Error('Analysis timed out. Please try again.'));
        }
      } catch (err) {
        clearInterval(id);
        reject(err);
      }
    }, POLL_INTERVAL_MS);
  });

const ProcessingScreen = ({ route }: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const input: string = route?.params?.url ?? '';
  const initialResult: any = route?.params?.result ?? null;

  const steps = isUrl(input) ? URL_STEPS : TEXT_STEPS;

  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const progressRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasStartedRef = useRef(false);

  const getStepFromProgress = (value: number) => {
    if (value >= 75) return 3;
    if (value >= 50) return 2;
    if (value >= 25) return 1;
    return 0;
  };

  const animateProgressTo = (target: number, slow = false) =>
    new Promise<void>(resolve => {
      const safeTarget = Math.min(Math.max(target, 0), 100);

      if (progressRef.current >= safeTarget) {
        resolve();
        return;
      }

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      const increment = slow ? 1 : 2;
      const tickMs = slow ? 300 : 35;

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

        const next = Math.min(current + increment, safeTarget);
        progressRef.current = next;
        setProgress(next);
        setActiveStep(getStepFromProgress(next));
      }, tickMs);
    });

  useEffect(() => {
    const run = async () => {
      try {
        if (hasStartedRef.current) return;
        hasStartedRef.current = true;

        if (!input?.trim()) {
          throw new Error('No URL or place text found.');
        }

        await animateProgressTo(20);

        if (!initialResult) {
          throw new Error('No analysis data received.');
        }

        const asyncJob = initialResult.async_job;
        let completedData: any;

        if (asyncJob?.token && asyncJob?.status === 'pending') {
          const pollPromise = pollJob(asyncJob.token);
          // Slowly creep toward 90% while the async job runs — don't await.
          // animateProgressTo(100) below will cancel this and rush to done.
          animateProgressTo(90, true);
          completedData = await pollPromise;
        } else {
          completedData = initialResult;
          await animateProgressTo(90);
        }

        // Completed response shape: { status, result: { query, places } }
        const resultPayload = completedData?.result ?? completedData;

        const places = Array.isArray(resultPayload?.places)
          ? mapPlaces(resultPayload.places)
          : [];

        const result = {
          query: String(resultPayload?.query || input),
          places,
        };

        await animateProgressTo(100);

        console.log('result', result);

        navigation.replace(SCREENS.ImportResultsScreen, { result, url: input });
      } catch (err: any) {
        const message =
          err?.response?.data?.message ||
          err?.response?.data?.error?.message ||
          err?.message ||
          'Failed to analyze location.';

        await animateProgressTo(100);

        Alert.alert('Error', message, [
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
      }
    };

    run();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const displayUrl = input.length > 45 ? input.slice(0, 42) + '...' : input;

  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.linkBox}>
          <View style={styles.dot} />
          <Text style={styles.linkText}>{displayUrl || 'Analyzing...'}</Text>
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
