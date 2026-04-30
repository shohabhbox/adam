import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import NotificationCard from './NotificationCard';

const today = [
  {
    id: '1',
    title: 'Trip Invitation',
    desc: 'John Carter invited you to join "Bali Adventure 2026"',
    time: '2h ago',
    type: 'primary',
    cta: 'View Invitation',
    unread: true,
  },
  {
    id: '2',
    title: 'Friend Request',
    desc: 'Sarah Johnson sent you a friend request',
    time: '4h ago',
    type: 'friend',
    cta: 'View Request',
    unread: true,
  },
  {
    id: '3',
    title: 'Update Available',
    desc: 'A new version of the app is available for download',
    time: '1d ago',
    type: 'update',
    cta: 'Update Now',
    unread: true,
  },
  {
    id: '4',
    title: 'Trip Invitation',
    desc: 'John Carter invited you to join "Bali Adventure 2026"',
    time: '2h ago',
    type: 'invitation',
    cta: 'View Invitation',
    unread: true,
  },
];

const NotificationsScreen = () => {
  const navigation = useAppNavigation<'Notifications'>();

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

        <Text style={styles.title}>Notifications</Text>

        <TouchableOpacity style={styles.markAll}>
          <Text style={styles.markText}>✓ Mark all</Text>
        </TouchableOpacity>
      </View>

      {/* BADGE */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>• 3 unread notifications</Text>
      </View>

      {/* TODAY */}
      <Text style={styles.section}>TODAY</Text>

      <FlatList
        data={today}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <NotificationCard item={item} />}
      />
    </View>
  );
};

export default NotificationsScreen;
