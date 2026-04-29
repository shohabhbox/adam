import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import { Icon, Icons } from '@/components';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const RemoveMemberModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal isVisible={visible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.sheet}>
        {/* DRAG INDICATOR */}

          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconBtn} onPress={onClose}>
              <Icon type={Icons.Ionicons} name="arrow-back" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Remove Member</Text>

            <View style={{ width: 40 }} />
          </View>

          {/* PROFILE */}
          <View style={styles.profile}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>EJ</Text>
            </View>

            <Text style={styles.name}>Emily Johnson</Text>
            <Text style={styles.email}>bilalraza@icloud.com</Text>

            <View style={styles.roleBadge}>
              <Text style={styles.roleText}>Editor · Joined Mar 12</Text>
            </View>
          </View>

          {/* CONTRIBUTIONS */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Bilal's Contributions</Text>

            <View style={styles.statsRow}>
              <StatBox value="4" label="Places added" />
              <StatBox value="7" label="Edits made" />
              <StatBox value="14d" label="Active for" />
            </View>
          </View>

          {/* WARNING */}
          <View style={styles.warningBox}>
            <Text style={styles.warningTitle}>Removal effects</Text>
            <Text style={styles.warningText}>
              Bilal will lose access immediately. Their saved places remain but
              they can't edit the trip.
            </Text>
          </View>

          {/* EFFECT LIST */}
          <View style={styles.card}>
            <EffectItem text="Access revoked immediately" negative />
            <EffectItem text="Invitation link disabled" negative />
            <EffectItem text="Places remain in trip" positive />
            <EffectItem text="Can be re-invited later" positive />
          </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.deleteBtn}>
            <Text style={styles.deleteText}>Remove Member</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveMemberModal;

const StatBox = ({ value, label }: any) => (
  <View style={styles.statBox}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const EffectItem = ({ text, positive, negative }: any) => (
  <View style={styles.effectRow}>
    <Icon
      type={Icons.Feather}
      name={positive ? 'check' : 'x'}
      color={positive ? '#10B981' : '#EF4444'}
      size={16}
    />
    <Text style={styles.effectText}>{text}</Text>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontWeight: '600',
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profile: {
    alignItems: 'center',
    marginTop: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#7C3AED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  name: {
    marginTop: 10,
    fontWeight: '600',
  },

  email: {
    color: '#8B8CA7',
    fontSize: 12,
  },

  roleBadge: {
    marginTop: 8,
    backgroundColor: '#EEE7FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  roleText: {
    color: '#7C3AED',
    fontSize: 11,
  },

  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 15,
    borderRadius: 14,
  },

  sectionTitle: {
    fontWeight: '600',
    marginBottom: 10,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    flex: 1,
    alignItems: 'center',
  },

  statValue: {
    fontWeight: '700',
    fontSize: 16,
  },

  statLabel: {
    fontSize: 11,
    color: '#8B8CA7',
  },

  warningBox: {
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FCA5A5',
    backgroundColor: '#FEF2F2',
  },

  warningTitle: {
    color: '#DC2626',
    fontWeight: '600',
    marginBottom: 5,
  },

  warningText: {
    fontSize: 12,
    color: '#B91C1C',
  },

  effectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  effectText: {
    marginLeft: 10,
    fontSize: 13,
  },

  footer: {
    padding: 20,
    backgroundColor: '#fff',
  },

  deleteBtn: {
    backgroundColor: '#EF4444',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  deleteText: {
    color: '#fff',
    fontWeight: '600',
  },

  cancelBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  cancelText: {
    color: '#6B7280',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  sheet: {
    backgroundColor: '#F2F4F7',
    flex: 1,
    justifyContent: 'space-between',
  },

  drag: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
