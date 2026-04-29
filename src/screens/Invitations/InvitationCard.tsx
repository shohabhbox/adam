import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';

const InvitationCard = ({ item }: any) => {
  return (
    <View style={styles.card}>
      {/* IMAGE */}
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />

        <Text style={styles.time}>{item.time}</Text>

        <View style={styles.overlay}>
          <Text style={styles.tripName}>{item.title}</Text>
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{item.inviter[0]}</Text>
          </View>

          <Text style={styles.invited}>
            Invited by <Text style={{ fontWeight: '600' }}>{item.inviter}</Text>
          </Text>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Icon type={Icons.Feather} name="calendar" size={14} />
            <Text style={styles.metaText}>{item.date}</Text>
          </View>

          <View style={styles.metaItem}>
            <Icon type={Icons.Feather} name="users" size={14} />
            <Text style={styles.metaText}>{item.members}</Text>
          </View>
        </View>

        {/* ACTIONS */}
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.acceptBtn}>
            <Text style={styles.acceptText}>Accept</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.declineBtn}>
            <Text style={styles.declineText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InvitationCard;
