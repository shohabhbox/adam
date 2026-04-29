import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import { Icon, Icons } from '@/components';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelectTrip?: (trip: any) => void;
}

const trips = [
  {
    id: '1',
    name: 'Bali Adventure 2025',
    date: 'Mar 2–14, 2025',
    places: '8 places',
    image: 'https://picsum.photos/400',
  },
  {
    id: '2',
    name: 'Bali Adventure 2025',
    date: 'Mar 2–14, 2025',
    places: '8 places',
    image: 'https://picsum.photos/401',
  },
  {
    id: '3',
    name: 'Bali Adventure 2025',
    date: 'Mar 2–14, 2025',
    places: '8 places',
    image: 'https://picsum.photos/402',
  },
];

const TripsTogetherModal: React.FC<Props> = ({
  visible,
  onClose,
  onSelectTrip,
}) => {
  return (
    <Modal isVisible={visible} style={{ margin: 0 }}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn} onPress={onClose}>
            <Icon type={Icons.Ionicons} name="arrow-back" onPress={onClose} />
          </TouchableOpacity>

          <Text style={styles.title}>Trips Together</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* FRIEND INFO */}
        <View style={styles.friendCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>SJ</Text>
          </View>

          <Text style={styles.friendName}>Sarah Johnson</Text>
          <Text style={styles.tripCount}>· 3 trips</Text>
        </View>

        {/* LIST */}
        <FlatList
          data={trips}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => onSelectTrip?.(item)}
            >
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.cardContent}>
                <Text style={styles.tripName}>{item.name}</Text>

                <View style={styles.row}>
                  <Icon type={Icons.Feather} name="calendar" size={14} />
                  <Text style={styles.meta}>{item.date}</Text>

                  <Icon
                    type={Icons.Feather}
                    name="map-pin"
                    size={14}
                    style={{ marginLeft: 10 }}
                  />
                  <Text style={styles.meta}>{item.places}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
};

export default TripsTogetherModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

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

  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 14,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EDE9FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  avatarText: {
    color: '#7C3AED',
    fontWeight: '600',
  },

  friendName: {
    fontWeight: '600',
  },

  tripCount: {
    marginLeft: 5,
    color: '#8B8CA7',
    fontSize: 12,
  },

  card: {
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: 150,
  },

  cardContent: {
    padding: 12,
  },

  tripName: {
    fontWeight: '600',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  meta: {
    marginLeft: 5,
    fontSize: 12,
    color: '#6B7280',
  },
});
