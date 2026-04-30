import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { COLORS } from '@/constant/config';

const itinerary = [
  {
    id: '1',
    title: 'Arrive Athens Airport',
    time: '10:30 AM',
    type: 'Travel',
    image: 'https://picsum.photos/200',
  },
  {
    id: '2',
    title: 'Acropolis & Parthenon',
    time: '01:00 PM',
    type: 'Attraction',
    image: 'https://picsum.photos/201',
  },
  {
    id: '3',
    title: 'Lunch at Monastiraki',
    time: '03:30 PM',
    type: 'Food',
    image: 'https://picsum.photos/202',
  },
  {
    id: '4',
    title: 'Hotel Plaka Check-In',
    time: '06:00 PM',
    type: 'Hotel',
    image: 'https://picsum.photos/203',
  },
];

const ArchivedTripScreen = () => {
  const navigation = useAppNavigation<'ArchivedTrip'>();
  const [day, setDay] = useState(1);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon
            type={Icons.Ionicons}
            name="arrow-back"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Bali Retreat</Text>

        <View style={styles.archivedBadge}>
          <Text style={styles.archivedText}>Archived</Text>
        </View>
      </View>

      {/* TRIP CARD */}
      <View style={styles.tripCard}>
        <Text style={styles.tripName}>Bali Retreat</Text>
        <Text style={styles.tripMeta}>
          Mar 2–14, 2025 · 8 places · 12 nights
        </Text>
      </View>

      {/* NOTICE */}
      <View style={styles.notice}>
        <Icon type={Icons.Feather} name="lock" size={14} />
        <Text style={styles.noticeText}>
          This is a read-only archived trip. No edits allowed.
        </Text>
      </View>

      {/* TITLE */}
      <Text style={styles.sectionTitle}>Archived Itinerary</Text>

      {/* DAY TABS */}
      <DayTabs active={day} onChange={setDay} />

      {/* LIST */}
      <FlatList
        data={itinerary}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item, index }) => (
          <ItineraryItem item={item} isLast={index === itinerary.length - 1} />
        )}
      />
    </View>
  );
};

export default ArchivedTripScreen;

const days = [1, 2, 3, 4, 5];

const DayTabs = ({ active, onChange }: any) => {
  return (
    <View style={styles.tabs}>
      {days.map(d => (
        <TouchableOpacity
          key={d}
          style={[styles.tab, active === d && styles.activeTab]}
          onPress={() => onChange(d)}
        >
          <Text style={[styles.tabText, active === d && styles.activeText]}>
            Day {d}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const ItineraryItem = ({ item, isLast }: any) => {
  const color = getTagColor(item.type);

  return (
    <View style={styles.row}>
      {/* TIMELINE */}
      <View style={styles.timeline}>
        <View style={styles.dot} />
        {!isLast && <View style={styles.line} />}
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={{ flex: 1 }}>
          <Text style={styles.itemTitle}>{item.title}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.time}>{item.time}</Text>

            <View style={[styles.tag, { backgroundColor: color + '20' }]}>
              <Text style={[styles.tagText, { color }]}>{item.type}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const getTagColor = (type: string) => {
  switch (type) {
    case 'Travel':
      return '#9CA3AF';
    case 'Attraction':
      return '#0EA5A8';
    case 'Food':
      return '#F59E0B';
    case 'Hotel':
      return '#8B5CF6';
    default:
      return '#0EA5A8';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  /* HEADER */
  header: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  archivedBadge: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  archivedText: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '500',
  },

  /* TRIP CARD */
  tripCard: {
    margin: 20,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },

  tripName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },

  tripMeta: {
    fontSize: 12,
    color: '#8B8CA7',
    marginTop: 4,
  },

  /* NOTICE */
  notice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },

  noticeText: {
    marginLeft: 8,
    fontSize: 12,
    color: '#6B7280',
  },

  /* SECTION TITLE */
  sectionTitle: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },

  /* DAY TABS */
  tabs: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
  },

  tab: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    marginRight: 8,
  },

  activeTab: {
    backgroundColor: COLORS.primary,
  },

  tabText: {
    fontSize: 12,
    color: '#6B7280',
  },

  activeText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  /* TIMELINE ROW */
  row: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 15,
  },

  timeline: {
    width: 30,
    alignItems: 'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },

  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 4,
  },

  /* ITEM CARD */
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 10,
    marginLeft: 10,

    // shadow
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },

  itemTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  time: {
    fontSize: 12,
    color: '#8B8CA7',
    marginRight: 8,
  },

  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },

  tagText: {
    fontSize: 11,
    fontWeight: '500',
  },
});
