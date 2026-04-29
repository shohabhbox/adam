import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const initialData = [
  {
    id: '1',
    title: 'Arrive Athens Airport',
    time: '10:30 AM',
    image: 'https://picsum.photos/200',
  },
  {
    id: '2',
    title: 'Acropolis & Parthenon',
    time: '01:00 PM',
    image: 'https://picsum.photos/201',
  },
  {
    id: '3',
    title: 'Lunch at Monastiraki',
    time: '03:30 PM',
    image: 'https://picsum.photos/202',
  },
  {
    id: '4',
    title: 'Hotel Plaka Check-In',
    time: '06:00 PM',
    image: 'https://picsum.photos/203',
  },
];

const ReorderScreen = () => {
  const navigation = useAppNavigation<'Reorder'>();

  const [data, setData] = useState(initialData);

  const renderItem = ({ item, drag, isActive, index }: any) => {
    return (
      <TouchableOpacity
        style={[styles.card, isActive && { opacity: 0.9 }]}
        onLongPress={drag}
        activeOpacity={1}
      >
        {/* INDEX */}
        <View style={styles.indexCircle}>
          <Text style={styles.indexText}>{item.id}</Text>
        </View>

        {/* IMAGE */}
        <Image source={{ uri: item.image }} style={styles.image} />

        {/* CONTENT */}
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>

          <View style={styles.timeRow}>
            <Icon type={Icons.Feather} name="clock" size={14} />
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>

        {/* DRAG ICON */}
        <Icon type={Icons.Feather} name="menu" size={18} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon
            type={Icons.Feather}
            name="x"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Reorder</Text>

        <View style={{ width: 60 }} />
      </View>

      {/* DAY CARD */}
      <View style={styles.dayCard}>
        <Text style={styles.dayText}>Day 1 · Monday, May 18</Text>
        <Text style={styles.stopText}>{data.length} stops</Text>
      </View>

      <Text style={styles.helper}>Hold and drag to reorder stops</Text>

      {/* LIST */}
      <DraggableFlatList
        data={data}
        keyExtractor={item => item.id}
        onDragEnd={({ data }) => setData(data)}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Save Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReorderScreen;
