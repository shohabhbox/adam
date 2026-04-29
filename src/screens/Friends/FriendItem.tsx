import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const getColor = (name: string) => {
  const colors = ['#8B5CF6', '#F59E0B', '#10B981', '#06B6D4', '#EF4444'];
  return colors[name.charCodeAt(0) % colors.length];
};

const FriendItem = ({ item }: any) => {
  const navigation = useAppNavigation<'Friends'>();

  const initials = item.name
    .split(' ')
    .map((w: string) => w[0])
    .join('');

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('FriendsProfileScreen');
      }}
      style={styles.item}
    >
      {/* AVATAR */}
      <View
        style={[styles.avatar, { backgroundColor: getColor(item.name) + '20' }]}
      >
        <Text style={[styles.avatarText, { color: getColor(item.name) }]}>
          {initials}
        </Text>
      </View>

      {/* INFO */}
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.sub}>{item.trips}</Text>
      </View>

      {/* ARROW */}
      <Icon type={Icons.Feather} name="chevron-right" />
    </TouchableOpacity>
  );
};

export default FriendItem;
