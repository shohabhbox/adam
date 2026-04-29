import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import SelectTripModal from '@/components/modal/SelectTripModal';
import TripsTogetherModal from '@/components/modal/TripsTogetherModal';
import RemoveFriendModal from '@/components/modal/RemoveFriendModal';

const FriendsProfileScreen = () => {
  const navigation = useAppNavigation<'FriendsProfile'>();

  const [tripModalVisible, setTripModalVisible] = React.useState(false);
  const [tripsTogetherModalVisible, setTripsTogetherModalVisible] =
    React.useState(false);
  const [removeFriendModalVisible, setRemoveFriendModalVisible] =
    React.useState(false);

  const MenuItem = ({ icon, title, subtitle, danger, onPress }: any) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <View style={styles.iconBox}>
          <Icon
            type={Icons.Feather}
            name={icon}
            size={16}
            color={danger ? '#EF4444' : '#111827'}
          />
        </View>

        <View>
          <Text style={[styles.menuTitle, danger && { color: '#EF4444' }]}>
            {title}
          </Text>
          <Text style={styles.menuSub}>{subtitle}</Text>
        </View>
      </View>

      <Icon type={Icons.Feather} name="chevron-right" onPress={onPress} />
    </TouchableOpacity>
  );

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

        <Text style={styles.headerTitle}>Profile</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* AVATAR */}
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SJ</Text>
        </View>

        <Text style={styles.name}>Sarah Johnson</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>Trip Partner</Text>
        </View>

        <Text style={styles.sub}>
          Friends since Jan 2025 · 3 trips together
        </Text>
      </View>

      {/* STATS */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>Shared Trips</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Places</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statValue}>2</Text>
          <Text style={styles.statLabel}>Countries</Text>
        </View>
      </View>

      {/* ACTIONS */}
      <View style={styles.card}>
        <MenuItem
          icon="plus-circle"
          title="Add to Trip"
          subtitle="Invite to an active trip"
          onPress={() => setTripModalVisible(true)}
        />

        <MenuItem
          icon="map"
          title="View Trips Together"
          subtitle="3 shared trips"
          onPress={() => setTripsTogetherModalVisible(true)}
        />

        <MenuItem
          icon="user-x"
          title="Remove Friend"
          subtitle="Remove from your connections"
          danger
          onPress={() => setRemoveFriendModalVisible(true)}
        />
      </View>

      <SelectTripModal
        visible={tripModalVisible}
        onClose={() => setTripModalVisible(false)}
        onSelect={(trip: any) => {
          setTripModalVisible(false);
        }}
      />
      <TripsTogetherModal
        visible={tripsTogetherModalVisible}
        onClose={() => setTripsTogetherModalVisible(false)}
        onSelectTrip={(trip: any) => {}}
      />

      <RemoveFriendModal
        visible={removeFriendModalVisible}
        onClose={() => setRemoveFriendModalVisible(false)}
        onRemove={() => {
          setRemoveFriendModalVisible(false);
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default FriendsProfileScreen;

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

  headerTitle: {
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

  profile: {
    alignItems: 'center',
    marginTop: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EDE9FE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#7C3AED',
  },

  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  badge: {
    marginTop: 6,
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  badgeText: {
    color: '#059669',
    fontSize: 12,
  },

  sub: {
    marginTop: 6,
    fontSize: 12,
    color: '#8B8CA7',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  statBox: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
  },

  statValue: {
    fontSize: 18,
    fontWeight: '700',
  },

  statLabel: {
    fontSize: 11,
    color: '#8B8CA7',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 16,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  menuTitle: {
    fontWeight: '500',
  },

  menuSub: {
    fontSize: 12,
    color: '#8B8CA7',
  },
});
