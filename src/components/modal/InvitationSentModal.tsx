import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Icon, Icons } from '@/components';
import { COLORS } from '@/constant';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const InvitationSentModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal isVisible={visible} onBackdropPress={onClose} style={{ margin: 0 }}>
      <View style={styles.inviteModalContainer}>
        {/* ICON */}
        <View style={styles.inviteIconWrapper}>
          <Icon
            type={Icons.Feather}
            name="check-circle"
            size={45}
            color={COLORS.primary}
          />
        </View>

        {/* TITLE */}
        <Text style={styles.inviteTitle}>Invitation Sent</Text>

        {/* DESCRIPTION */}
        <Text style={styles.inviteDesc}>
          Your friend will receive an invite shortly.
          {'\n'}They'll appear in your list once they accept.
        </Text>

        {/* BADGE */}
        <View style={styles.inviteBadge}>
          <Icon
            type={Icons.Feather}
            name="check-circle"
            size={14}
            color={COLORS.primary}
          />
          <Text style={styles.inviteBadgeText}> Invite delivered</Text>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.inviteBtn} onPress={onClose}>
          <Text style={styles.inviteBtnText}>Done</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default InvitationSentModal;

const styles = StyleSheet.create({
  /* ================= INVITATION MODAL ================= */

  inviteModalContainer: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  inviteIconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E6F4F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary + '40',
    marginTop: 20,
  },

  inviteTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },

  inviteDesc: {
    marginTop: 10,
    textAlign: 'center',
    color: '#8B8CA7',
    fontSize: 14,
    lineHeight: 20,
  },

  inviteBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary + '20',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 20,
  },

  inviteBadgeText: {
    color: COLORS.primary,
    fontSize: 12,
    marginLeft: 4,
  },

  inviteBtn: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  inviteBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
