import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from '../Invites/styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import InviteCard from '../Invites/InviteCard';
import InviteTabs from '../Invites/InviteTabs';

const data = [
  {
    id: '1',
    name: 'Sarah Johnson',
    time: 'Sent 2 days ago',
  },
  {
    id: '2',
    name: 'Marcus Lee',
    time: 'Sent 5 days ago',
  },
  {
    id: '3',
    name: 'Daniel Torres',
    time: 'Sent 1 week ago',
  },
];

const PendingInvitesScreen = () => {
  const navigation = useAppNavigation<'PendingInvites'>();
  const [tab, setTab] = useState<'Trips' | 'Friends'>('Trips');

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

        <Text style={styles.title}>Pending Invites</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>3 pending</Text>
        </View>
      </View>

      {/* TABS */}
      <InviteTabs active={tab} onChange={setTab} />

      {/* LIST */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => <InviteCard item={item} />}
      />
    </View>
  );
};

export default PendingInvitesScreen;
