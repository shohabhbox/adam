import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import InvitationCard from './InvitationCard';
import InvitationTabs from './InvitationTabs';
import FriendInviteCard from './FriendInviteCard';

const data = [
  {
    id: '1',
    title: 'Bali Adventure 2026',
    inviter: 'John Carter',
    date: 'Mar 15 – Mar 28',
    members: '4 members',
    time: '2h ago',
    image: 'https://picsum.photos/400',
  },
  {
    id: '2',
    title: 'Tokyo Nights',
    inviter: 'Aria Patel',
    date: 'Apr 2 – Apr 10',
    members: '3 members',
    time: '5h ago',
    image: 'https://picsum.photos/401',
  },
];

const InvitationsScreen = () => {
  const navigation = useAppNavigation<'Invitations'>();

  const [tab, setTab] = useState('Trips');

  const RenderItem = ({ item }: { item: any }) => {
    if (tab === 'Trips') {
      return <InvitationCard item={item} />;
    } else {
      return <FriendInviteCard />;
    }
  };

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

        <Text style={styles.title}>Invitations</Text>

        <View style={styles.bell}>
          <Icon type={Icons.Feather} name="bell" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>4</Text>
          </View>
        </View>
      </View>

      {/* TABS */}
      <InvitationTabs active={tab} onChange={setTab} />

      {/* LIST */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
    </View>
  );
};

export default InvitationsScreen;
