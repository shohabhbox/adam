import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { Icon, Icons } from '@/components';

interface Props {
  visible: boolean;
  onClose: () => void;
  onRemove: () => void;
}

const RemoveFriendModal: React.FC<Props> = ({ visible, onClose, onRemove }) => {
  return (
    <Modal isVisible={visible} style={{ margin: 0 }}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn} onPress={onClose}>
            <Icon type={Icons.Ionicons} name="arrow-back" onPress={onClose} />
          </TouchableOpacity>

          <Text style={styles.title}>Remove Friend</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* WARNING ICON */}
        <View style={styles.iconWrap}>
          <Icon
            type={Icons.Feather}
            name="alert-triangle"
            size={28}
            color="#EF4444"
          />
        </View>

        {/* TITLE */}
        <Text style={styles.mainTitle}>Remove this friend?</Text>

        {/* DESCRIPTION */}
        <Text style={styles.desc}>
          Sarah will be removed from your friends list and will lose access to
          shared trips and collaboration.
        </Text>

        {/* USER CARD */}
        <View style={styles.userCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>SJ</Text>
          </View>

          <View>
            <Text style={styles.name}>Sarah Johnson</Text>
            <Text style={styles.sub}>3 trips together · Trip Partner</Text>
          </View>
        </View>

        {/* EFFECT BOX */}
        <View style={styles.warningBox}>
          <Bullet text="Access to shared trips will be removed" />
          <Bullet text="Collaboration on itineraries will end" />
          <Bullet text="They can be re-added later if needed" />
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.removeBtn} onPress={onRemove}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelBtnBottom} onPress={onClose}>
            <Text style={styles.cancelTextBottom}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveFriendModal;

const Bullet = ({ text }: any) => (
  <View style={styles.bulletRow}>
    <View style={styles.bulletDot} />
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

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

  title: {
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

  iconWrap: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },

  mainTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
  },

  desc: {
    textAlign: 'center',
    color: '#8B8CA7',
    marginTop: 10,
    paddingHorizontal: 30,
  },

  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 14,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EDE9FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  avatarText: {
    color: '#7C3AED',
    fontWeight: '600',
  },

  name: {
    fontWeight: '600',
  },

  sub: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  warningBox: {
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FCA5A5',
    backgroundColor: '#FEF2F2',
  },

  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EF4444',
    marginRight: 8,
  },

  bulletText: {
    fontSize: 12,
    color: '#7F1D1D',
  },

  footer: {
    marginTop: 'auto',
    padding: 20,
  },

  removeBtn: {
    backgroundColor: '#EF4444',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  removeText: {
    color: '#fff',
    fontWeight: '600',
  },

  cancelBtnBottom: {
    marginTop: 10,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
  },

  cancelTextBottom: {
    color: '#374151',
    fontWeight: '500',
  },
});
