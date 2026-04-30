import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import LocationCard from './LocationCard';

const data = [
  {
    id: '1',
    title: 'Colosseum',
    location: 'Shibuya City, Tokyo, Japan',
    date: 'Saved on March 20, 2026',
    saved: false,
    image: 'https://picsum.photos/400/200',
  },
  {
    id: '2',
    title: 'Santorini Sunset Point',
    location: 'Shibuya City, Tokyo, Japan',
    date: 'Saved on March 20, 2026',
    saved: false,
    image: 'https://picsum.photos/401/200',
  },
  {
    id: '3',
    title: 'London Bridge',
    location: 'Shibuya City, Tokyo, Japan',
    date: 'Saved on March 20, 2026',
    saved: true,
    image: 'https://picsum.photos/402/200',
  },
];

const ImportResultsScreen = () => {
  const navigation = useAppNavigation<'ImportResults'>();

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

        <Text style={styles.title}>Import Locations</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => <LocationCard item={item} />}
      />
    </View>
  );
};

export default ImportResultsScreen;
