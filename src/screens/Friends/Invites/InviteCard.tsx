import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const getColor = (name: string) => {
  const colors = ['#0EA5A8', '#8B5CF6', '#F59E0B'];
  return colors[name.charCodeAt(0) % colors.length];
};

const InviteCard = ({ item }: any) => {
  const initials = item.name
    .split(' ')
    .map((w: string) => w[0])
    .join('');

  const color = getColor(item.name);

  return (
    <View style={styles.card}>
      {/* TOP */}
      <View style={styles.cardHeader}>
        <View style={styles.left}>
          <View style={[styles.avatar, { borderColor: color }]}>
            <Text style={[styles.avatarText, { color }]}>{initials}</Text>
          </View>

          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>

        <View style={styles.pendingBadge}>
          <Text style={styles.pendingText}>Pending</Text>
        </View>
      </View>

      {/* ACTIONS */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Cancel Invite</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendBtn}>
          <Text style={styles.resendText}>Resend Invite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InviteCard;
