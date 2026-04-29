import { COLORS } from '@/constant';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  name?: string;
  subtitle?: string;
  onAccept?: () => void;
  onDecline?: () => void;
}

const getColor = (name: string) => {
  const colors = ['#EC4899', '#6366F1', COLORS.primary, '#F59E0B'];
  return colors[name.charCodeAt(0) % colors.length];
};

const FriendInviteCard: React.FC<Props> = ({
  name = 'Sarah Johnson',
  subtitle = 'Wants to connect with you',
  onAccept = () => console.log('Accepted'),
  onDecline = () => console.log('Declined'),
}) => {
  const initials = name
    .split(' ')
    .map(w => w[0])
    .join('');

  const color = getColor(name);

  return (
    <View style={styles.friendCard}>
      {/* LEFT */}
      <View style={styles.left}>
        <View style={[styles.avatar, { backgroundColor: color }]}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.sub}>{subtitle}</Text>
        </View>
      </View>

      {/* RIGHT */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.declineBtn} onPress={onDecline}>
          <Text style={styles.declineText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FriendInviteCard;

const styles = StyleSheet.create({
  /* CARD */
  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 12,
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',

    // subtle shadow (iOS + Android)
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  /* LEFT SIDE */
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  avatarText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },

  name: {
    fontWeight: '600',
    fontSize: 14,
    color: '#111827',
  },

  sub: {
    fontSize: 12,
    color: '#8B8CA7',
    marginTop: 2,
  },

  /* RIGHT SIDE */
  actions: {
    alignItems: 'flex-end',
  },

  acceptBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    marginBottom: 6,
  },

  acceptText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },

  declineBtn: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },

  declineText: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '500',
  },
});
