import styles from './styles';

import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const getColor = (name: string) => {
  const colors = ['#E5E7EB', '#D1D5DB', '#E5E7EB'];
  return colors[name.charCodeAt(0) % colors.length];
};

const RemovedItem = ({ item }: any) => {
  const initials = item.name
    .split(' ')
    .map((w: string) => w[0])
    .join('');

  const color = getColor(item.name);

  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={[styles.avatar, { backgroundColor: color }]}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>Removed</Text>
      </View>
    </View>
  );
};

export default RemovedItem;
