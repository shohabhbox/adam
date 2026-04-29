import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import { Icon, Icons } from '@/components';

interface Member {
  id: string;
  name: string;
  email: string;
  role: 'Editor' | 'Viewer';
}

interface Props {
  visible: boolean;
  onClose: () => void;
  onTransfer: (member: Member) => void;
}

const members: Member[] = [
  { id: '1', name: 'Emily Johnson', email: 'emily@.com', role: 'Editor' },
  { id: '2', name: 'James Anderson', email: 'james@.com', role: 'Editor' },
  { id: '3', name: 'Oliver Thompson', email: 'oliver@.com', role: 'Viewer' },
];

const TransferOwnershipModal: React.FC<Props> = ({
  visible,
  onClose,
  onTransfer,
}) => {
  const [selected, setSelected] = useState<Member>(members[0]);

  return (
    <Modal isVisible={visible} style={{ margin: 0 }}>
      <View style={styles.fullScreenContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconBtn} onPress={onClose}>
              <Icon type={Icons.Ionicons} name="arrow-back" onPress={onClose} />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Transfer Ownership</Text>

            <View style={{ width: 40 }} />
          </View>

          {/* ICON */}
          <View style={styles.crownBox}>
            <Icon type={Icons.Feather} name="award" size={28} color="#fff" />
          </View>

          {/* TITLE */}
          <Text style={styles.title}>Transfer Ownership</Text>

          <Text style={styles.desc}>
            Choose a member to become the new owner of{' '}
            <Text style={{ fontWeight: '600' }}>Greece Island Hop</Text>. You
            will become an Editor.
          </Text>

          {/* WARNING */}
          <View style={styles.warningBoxYellow}>
            <Text style={styles.warningTitleYellow}>
              This action cannot be undone
            </Text>
            <Text style={styles.warningTextYellow}>
              The new owner will have full control including removing you.
            </Text>
          </View>

          {/* MEMBERS */}
          <Text style={styles.sectionLabel}>SELECT NEW OWNER</Text>

          {members.map(item => {
            const isSelected = selected.id === item.id;

            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.memberSelectCard,
                  isSelected && styles.memberSelected,
                ]}
                onPress={() => setSelected(item)}
              >
                {/* AVATAR */}
                <View style={styles.avatarGradient}>
                  <Text style={styles.avatarText}>
                    {item.name.slice(0, 2).toUpperCase()}
                  </Text>
                </View>

                {/* INFO */}
                <View style={{ flex: 1 }}>
                  <Text style={styles.memberName}>{item.name}</Text>
                  <Text style={styles.memberEmail}>{item.email}</Text>
                </View>

                {/* ROLE */}
                <View style={styles.roleBadge}>
                  <Text style={styles.roleText}>{item.role}</Text>
                </View>

                {/* RADIO */}
                <View style={styles.radio}>
                  {isSelected && <View style={styles.radioFill} />}
                </View>
              </TouchableOpacity>
            );
          })}

          {/* WHAT HAPPENS */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>What happens next</Text>

            <Bullet text={`${selected.name} becomes the new Owner`} />
            <Bullet text={`You will become an Editor`} />
          </View>
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.transferBtn}
            onPress={() => onTransfer(selected)}
          >
            <Text style={styles.transferText}>Transfer to {selected.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TransferOwnershipModal;

const Bullet = ({ text }: any) => (
  <View style={styles.bulletRow}>
    <Icon type={Icons.Feather} name="chevron-right" size={14} />
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  crownBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#EAB308',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
  },

  cancelBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
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

  cancelText: {
    color: '#6B7280',
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

  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 15,
    borderRadius: 14,
  },

  cardTitle: {
    fontWeight: '600',
    marginBottom: 10,
  },

  sectionTitle: {
    fontWeight: '600',
    marginBottom: 10,
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
  },

  desc: {
    textAlign: 'center',
    marginTop: 10,
    color: '#8B8CA7',
    paddingHorizontal: 30,
  },

  warningBoxYellow: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
    borderWidth: 1,
    margin: 20,
    padding: 15,
    borderRadius: 12,
  },

  sectionLabel: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 12,
    color: '#9CA3AF',
  },

  warningTitleYellow: {
    color: '#B45309',
    fontWeight: '600',
  },

  warningTextYellow: {
    color: '#92400E',
    fontSize: 12,
    marginTop: 5,
  },

  memberSelectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
  },

  memberSelected: {
    borderWidth: 2,
    borderColor: '#EAB308',
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioFill: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EAB308',
  },

  transferBtn: {
    backgroundColor: '#EAB308',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  transferText: {
    color: '#fff',
    fontWeight: '600',
  },

  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  bulletText: {
    marginLeft: 8,
    fontSize: 13,
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
});
