import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import { Icon, Icons } from '@/components';
import { COLORS } from '@/constant/config';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const data = [
  {
    id: '1',
    user: 'Emily Johnson',
    action: 'added a new place',
    highlight: 'Acropolis Museum, Athens',
    type: 'success',
    time: '2 min ago',
    tag: 'NEW',
  },
  {
    id: '2',
    user: 'Sophia Williams',
    action: 'reordered Day 3 itinerary',
    highlight: 'Ferry to Santorini moved to morning',
    type: 'warning',
    time: '18 min ago',
    tag: 'NEW',
  },
  {
    id: '3',
    user: 'Oliver Thompson',
    action: 'joined the trip',
    highlight: 'Accepted invite · Viewer',
    type: 'success',
    time: '2 hrs ago',
  },
];

const TripActivityModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal isVisible={visible} style={{ margin: 0 }}>
      <View style={styles.fullScreenContainer}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn} onPress={onClose}>
            <Icon type={Icons.Ionicons} name="arrow-back" onPress={onClose} />
          </TouchableOpacity>

          <View>
            <Text style={styles.headerTitle}>Trip Activity</Text>
            <Text style={styles.subtitle}>Greece Island Hop</Text>
          </View>

          <View style={{ width: 40 }} />
        </View>

        {/* LIST */}
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={({ item, index }) => (
            <ActivityItem item={item} isLast={index === data.length - 1} />
          )}
        />
      </View>
    </Modal>
  );
};

const ActivityItem = ({ item, isLast }: any) => {
  const getColor = () => {
    switch (item.type) {
      case 'success':
        return '#E6F4F2';
      case 'warning':
        return '#FEF3C7';
      case 'danger':
        return '#FEE2E2';
      case 'info':
        return '#EDE9FE';
      default:
        return '#E6F4F2';
    }
  };

  return (
    <View style={styles.row}>
      {/* TIMELINE */}
      <View style={styles.timeline}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.user.slice(0, 2).toUpperCase()}
          </Text>
        </View>

        {!isLast && <View style={styles.line} />}
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.text}>
            <Text style={styles.bold}>{item.user}</Text> {item.action}
          </Text>

          {item.tag && (
            <View style={styles.tag}>
              <Text style={styles.tagText}>{item.tag}</Text>
            </View>
          )}

          <Text style={styles.time}>{item.time}</Text>
        </View>

        {/* HIGHLIGHT */}
        <View style={[styles.highlight, { backgroundColor: getColor() }]}>
          <Text style={styles.highlightText}>{item.highlight}</Text>
        </View>
      </View>
    </View>
  );
};

export default TripActivityModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  header: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
  },

  subtitle: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
  },

  timeline: {
    width: 40,
    alignItems: 'center',
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#fff',
    fontWeight: '600',
  },

  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 5,
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 14,
    marginLeft: 10,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  text: {
    flex: 1,
    fontSize: 13,
  },

  bold: {
    fontWeight: '600',
  },

  tag: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 6,
  },

  tagText: {
    fontSize: 10,
    color: '#EF4444',
  },

  time: {
    fontSize: 10,
    color: '#9CA3AF',
    marginLeft: 6,
  },

  highlight: {
    marginTop: 8,
    padding: 8,
    borderRadius: 10,
  },

  highlightText: {
    fontSize: 12,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
