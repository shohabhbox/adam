import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Icon, Icons } from '@/components';
import RemoveMemberModal from './modal/RemoveMemberModal';

interface Props {
  name: string;
  role: 'Owner' | 'Editor' | 'Viewer';
  email?: string;
  date?: string;
  onRemove?: () => void;
}

const MemberItem: React.FC<Props> = ({ name, role, email, date, onRemove }) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  const [removeVisible, setRemoveVisible] = useState(false);

  return (
    <View style={styles.memberCard}>
      {/* AVATAR */}
      <View style={styles.avatarGradient}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      {/* INFO */}
      <View style={{ flex: 1 }}>
        <Text style={styles.memberName}>{name}</Text>
        <Text style={styles.memberEmail}>{email}</Text>

        <View style={styles.row}>
          {/* ROLE BADGE */}
          <View style={styles.roleBadge}>
            <Icon type={Icons.Feather} name="edit-3" size={12} />
            <Text style={styles.roleText}>{role}</Text>
          </View>

          {/* DATE */}
          {date && <Text style={styles.date}>{date}</Text>}
        </View>
      </View>

      {/* REMOVE BUTTON */}
      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => setRemoveVisible(true)}
      >
        <Icon
          type={Icons.Feather}
          name="x"
          size={16}
          onPress={() => setRemoveVisible(true)}
        />
      </TouchableOpacity>

      <RemoveMemberModal
        visible={removeVisible}
        onClose={() => setRemoveVisible(false)}
      />
    </View>
  );
};

export default MemberItem;

const styles = StyleSheet.create({
  /* ================= MEMBER ITEM NEW ================= */

  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 12,
    borderRadius: 16,
  },

  avatarGradient: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,

    // gradient-like fallback
    backgroundColor: '#7C3AED',
  },

  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  memberName: {
    fontWeight: '600',
    fontSize: 14,
  },

  memberEmail: {
    fontSize: 12,
    color: '#8B8CA7',
    marginTop: 2,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEE7FF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },

  roleText: {
    fontSize: 11,
    color: '#7C3AED',
    marginLeft: 4,
  },

  date: {
    fontSize: 11,
    color: '#9CA3AF',
    marginLeft: 10,
  },

  removeBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
