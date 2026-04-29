import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import TimelineItem from './TimelineItem';
const data = [
  {
    id: '1',
    title: 'Bali Retreat',
    date: 'Mar 2–14, 2025',
    places: '8 places',
    nights: '12 nights',
    flag: '🇮🇩',
  },
  {
    id: '2',
    title: 'Lisbon Fall',
    date: 'Oct 8–16, 2024',
    places: '6 places',
    nights: '8 nights',
    flag: '🇵🇹',
  },
  {
    id: '3',
    title: 'NYC Weekend',
    date: 'Jul 19–22, 2024',
    places: '5 places',
    nights: '3 nights',
    flag: '🇺🇸',
  },
];

const TravelTimelineScreen = () => {
  const navigation = useAppNavigation<'TravelTimeline'>();

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

        <Text style={styles.title}>Travel Memory Timeline</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* BADGE */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>✓ 5 completed trips</Text>
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item, index }) => (
          <TimelineItem item={item} isLast={index === data.length - 1} />
        )}
      />
    </View>
  );
};

export default TravelTimelineScreen;
