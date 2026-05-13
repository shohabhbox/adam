import React, { useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LocationCard from './LocationCard';
import AppScreen from '@/components/AppScreen';

type SpecificPlaceDetail = {
  name: string;
  address: string;
  lat: number;
  lng: number;
  image: string | null;
};

type EnrichedPlaceSuggestion = {
  place: string;
  category: string;
  city: string;
  country: string;
  confidence: string;
  lat: number;
  lng: number;
  reason: string;
  details: SpecificPlaceDetail | null;
  detailError?: string | null;
};

type ImportResult = {
  query: string;
  places: EnrichedPlaceSuggestion[];
};

const fallbackData = [
  {
    id: '1',
    title: 'Colosseum',
    location: 'Rome, Italy',
    date: 'Saved on March 20, 2026',
    saved: false,
    image: 'https://picsum.photos/400/200',
  },
];

const ImportResultsScreen = ({ route }: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const result: ImportResult | undefined = route?.params?.result;

  const formatCoordinates = (lat?: number, lng?: number) => {
    const safeLat = Number(lat || 0);
    const safeLng = Number(lng || 0);

    if (!safeLat || !safeLng) {
      return '';
    }

    return `${safeLat.toFixed(4)}, ${safeLng.toFixed(4)}`;
  };

  const data = useMemo(() => {
    if (!result?.places?.length) {
      return fallbackData;
    }

    return result.places.map((item, index) => {
      const detail = item.details;

      const title = detail?.name || item.place || 'Unnamed Place';

      const address =
        detail?.address ||
        [item.city, item.country].filter(Boolean).join(', ') ||
        formatCoordinates(item.lat, item.lng) ||
        'Location not available';

      const lat = detail?.lat || item.lat || 0;
      const lng = detail?.lng || item.lng || 0;

      const coordinates = formatCoordinates(lat, lng);

      return {
        id: `${index + 1}`,
        title,
        location: address,
        date: `Confidence: ${item.confidence || '0%'}`,
        saved: false,
        image:
          detail?.image ||
          `https://picsum.photos/seed/${encodeURIComponent(title)}/400/200`,

        // Extra data if LocationCard needs later
        category: item.category,
        city: item.city,
        country: item.country,
        confidence: item.confidence,
        reason: item.reason,
        lat,
        lng,
        coordinates,
        detailError: item.detailError,
        raw: item,
      };
    });
  }, [result]);

  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon type={Icons.Ionicons} name="arrow-back" disabled={true} />
          </TouchableOpacity>

          <Text style={styles.title}>Import Locations</Text>

          <View style={{ width: 40 }} />
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={({ item }) => <LocationCard item={item} />}
        />
      </View>
    </AppScreen>
  );
};

export default ImportResultsScreen;