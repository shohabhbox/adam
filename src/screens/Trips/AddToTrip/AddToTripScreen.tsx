import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import TripSelectCard from './TripSelectCard';
import { SCREENS } from '@/constant';

const trips = [
  {
    id: '1',
    title: 'Italy Spring Escape',
    date: 'Apr 12 – Apr 22, 2026',
    places: '14 places saved',
    image: 'https://picsum.photos/200',
  },
  {
    id: '2',
    title: 'Greek Island Hopping',
    date: 'Jun 5 – Jun 18, 2026',
    places: '9 places saved',
    image: 'https://picsum.photos/201',
  },
  {
    id: '3',
    title: 'Southern Spain Road Trip',
    date: 'Sep 1 – Sep 14, 2025',
    places: '11 places saved',
    image: 'https://picsum.photos/202',
  },
  {
    id: '4',
    title: 'Japan Cherry Blossom',
    date: 'Mar 20 – Apr 5, 2027',
    places: '18 places saved',
    image: 'https://picsum.photos/203',
  },
];

const AddToTripScreen = () => {
  const navigation = useAppNavigation<'AddToTrip'>();
  const [selected, setSelected] = useState<string | null>('1');

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon type={Icons.Ionicons} name="arrow-back" />
        </TouchableOpacity>

        <View>
          <Text style={styles.subTitle}>Colosseum, Rome</Text>
          <Text style={styles.title}>Add to Trip</Text>
        </View>
      </View>

      <Text style={styles.desc}>
        Choose which itinerary to save this location to
      </Text>

      {/* LIST */}
      <FlatList
        data={trips}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TripSelectCard
            item={item}
            selected={selected === item.id}
            onPress={() => setSelected(item.id)}
          />
        )}
      />

      {/* CREATE NEW */}
      <TouchableOpacity
        style={styles.createBox}
        onPress={() => {
          navigation.navigate(SCREENS.CreateTripScreen);
        }}
      >
        <Icon type={Icons.Feather} name="plus" size={18} />
        <Text style={styles.createText}>Create new trip</Text>
      </TouchableOpacity>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryBtn} disabled={!selected}>
          <Text style={styles.primaryText}>Add to Italy Spring Escape</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddToTripScreen;
