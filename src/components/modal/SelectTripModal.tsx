import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import { Icon, Icons } from '@/components';
import { COLORS } from '@/constant/config';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (trip: any) => void;
}

const trips = [
  {
    id: '1',
    name: 'Tokyo 2026',
    date: 'Apr 10 – Apr 22, 2026',
    places: '8 places',
  },
  {
    id: '2',
    name: 'Weekend Trip — Paris',
    date: 'May 3 – May 7, 2026',
    places: '5 places',
  },
  {
    id: '3',
    name: 'Road Trip USA',
    date: 'Jun 15 – Jun 30, 2026',
    places: '12 places',
  },
];

const SelectTripModal: React.FC<Props> = ({ visible, onClose, onSelect }) => {
  return (
    <Modal isVisible={visible} style={{ margin: 0 }}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn} onPress={onClose}>
            <Icon type={Icons.Ionicons} name="arrow-back" onPress={onClose} />
          </TouchableOpacity>

          <Text style={styles.title}>Select Trip</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* USER INFO */}
        <View style={styles.userCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>SJ</Text>
          </View>

          <View>
            <Text style={styles.userTitle}>Adding Sarah Johnson</Text>
            <Text style={styles.userSub}>Select a trip to invite her to</Text>
          </View>
        </View>

        {/* LABEL */}
        <Text style={styles.section}>YOUR ACTIVE TRIPS</Text>

        {/* LIST */}
        <FlatList
          data={trips}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TripItem item={item} onSelect={onSelect} />
          )}
        />
      </View>
    </Modal>
  );
};

export default SelectTripModal;

const TripItem = ({ item, onSelect }: any) => {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.tripName}>{item.name}</Text>
        <Text style={styles.tripDate}>{item.date}</Text>

        <View style={styles.placeRow}>
          <Icon type={Icons.Feather} name="map-pin" size={14} />
          <Text style={styles.placeText}>{item.places}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addBtn} onPress={() => onSelect(item)}>
        <Text style={styles.addText}>Add to Trip</Text>
      </TouchableOpacity>
    </View>
  );
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* USER CARD */
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 16,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EDE9FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  avatarText: {
    fontWeight: '700',
    color: '#7C3AED',
  },

  userTitle: {
    fontWeight: '600',
  },

  userSub: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  section: {
    marginHorizontal: 20,
    fontSize: 11,
    color: '#9CA3AF',
    marginBottom: 10,
  },

  /* CARD */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 16,
  },

  tripName: {
    fontWeight: '600',
  },

  tripDate: {
    fontSize: 12,
    color: '#8B8CA7',
    marginTop: 2,
  },

  placeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  placeText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#6B7280',
  },

  addBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },

  addText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});
