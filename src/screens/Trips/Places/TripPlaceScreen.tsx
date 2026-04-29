import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import styles from './styles';
import RenderItem from './renderItem';

const initialData = [
  {
    id: '1',
    name: 'Eiffel Tower',
    location: 'Champ de Mars, Paris',
    type: 'Landmark',
    added: true,
    image: 'https://picsum.photos/200',
  },
  {
    id: '2',
    name: 'Café de Flore',
    location: 'Saint-Germain-des-Prés, Paris',
    type: 'Café',
    added: true,
    image: 'https://picsum.photos/201',
  },
  {
    id: '3',
    name: 'Shibuya Crossing',
    location: 'Shibuya, Tokyo',
    type: 'Urban',
    added: false,
    image: 'https://picsum.photos/202',
  },
  {
    id: '4',
    name: 'Oia Sunset Point',
    location: 'Oia Village, Santorini',
    type: 'Nature',
    added: false,
    image: 'https://picsum.photos/203',
  },
];

const TripPlaces = () => {
  const navigation = useAppNavigation<'ViewAll'>();

  const [data, setData] = useState(initialData);

  const toggleAdd = (id: string) => {
    setData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, added: !item.added } : item,
      ),
    );
  };

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

        <Text style={styles.title}>View all</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <RenderItem item={item} onToggle={toggleAdd} />
        )}
      />
    </View>
  );
};


export default TripPlaces;

