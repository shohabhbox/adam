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

interface Props {
  visible: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteTripModal: React.FC<Props> = ({ visible, onClose, onDelete }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Modal isVisible={visible} style={{ margin: 0 }}>
      <View style={styles.fullScreenContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconBtn} onPress={onClose}>
              <Icon type={Icons.Ionicons} name="arrow-back" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Delete Trip</Text>

            <View style={{ width: 40 }} />
          </View>

          {/* ICON */}
          <View style={styles.deleteIconBox}>
            <Icon
              type={Icons.Feather}
              name="trash-2"
              size={30}
              color="#EF4444"
            />
          </View>

          {/* TITLE */}
          <Text style={styles.deleteTitle}>Delete this trip?</Text>

          <Text style={styles.deleteDesc}>
            This will permanently remove the trip and all its data for{' '}
            <Text style={{ color: '#EF4444', fontWeight: '600' }}>
              all 4 members
            </Text>
            . You cannot undo this.
          </Text>

          {/* TRIP CARD */}
          <View style={styles.tripBox}>
            <Text style={styles.tripName}>Greece Island Hop</Text>

            <View style={styles.tripMetaRow}>
              <MetaItem icon="map-pin" label="9 places" />
              <MetaItem icon="calendar" label="15 nights" />
              <MetaItem icon="users" label="4 members" />
            </View>
          </View>

          {/* WHAT GETS DELETED */}
          <Text style={styles.sectionLabel}>WHAT GETS DELETED</Text>

          <View style={styles.card}>
            <DeleteItem text="All saved places & notes" />
            <DeleteItem text="15-night itinerary" />
            <DeleteItem text="Shared pool with members" />
            <DeleteItem text="Trip activity history" />
            <DeleteItem text="All member access & invites" />
          </View>

          {/* CONFIRM */}
          <TouchableOpacity
            style={styles.confirmRow}
            onPress={() => setChecked(!checked)}
          >
            <View style={[styles.checkbox, checked && styles.checkedBox]}>
              {checked && (
                <Icon
                  type={Icons.Feather}
                  name="check"
                  size={14}
                  color="#fff"
                />
              )}
            </View>

            <Text style={styles.confirmText}>
              I understand this will permanently delete{' '}
              <Text style={{ fontWeight: '600' }}>Greece Island Hop</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.deleteBtn, { opacity: checked ? 1 : 0.5 }]}
            disabled={!checked}
            onPress={onDelete}
          >
            <Text style={styles.deleteBtnText}>Delete Trip Permanently</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.keepBtn} onPress={onClose}>
            <Text style={styles.keepText}>Keep Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteTripModal;

const MetaItem = ({ icon, label }: any) => (
  <View style={styles.metaItem}>
    <Icon type={Icons.Feather} name={icon} size={14} />
    <Text style={styles.metaText}>{label}</Text>
  </View>
);

const DeleteItem = ({ text }: any) => (
  <View style={styles.deleteRow}>
    <Icon type={Icons.Feather} name="x" size={14} color="#EF4444" />
    <Text style={styles.deleteItemText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

    // shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },

    // elevation (Android)
    elevation: 2,
  },
  deleteIconBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FCA5A5',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  header: {
    marginTop: 10, // adjust if using SafeArea
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
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

  deleteTitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
  },

  deleteDesc: {
    textAlign: 'center',
    marginTop: 10,
    color: '#8B8CA7',
    paddingHorizontal: 30,
  },

  tripBox: {
    backgroundColor: '#FEF2F2',
    margin: 20,
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FCA5A5',
  },

  tripName: {
    fontWeight: '600',
  },

  tripMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  metaText: {
    marginLeft: 5,
    fontSize: 12,
  },

  sectionLabel: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 12,
    color: '#9CA3AF',
  },

  deleteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  deleteItemText: {
    marginLeft: 10,
    fontSize: 13,
  },

  confirmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EF4444',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkedBox: {
    backgroundColor: '#EF4444',
  },

  confirmText: {
    flex: 1,
    fontSize: 12,
  },

  deleteBtn: {
    backgroundColor: '#EF4444',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  deleteBtnText: {
    color: '#fff',
    fontWeight: '600',
  },

  keepBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  keepText: {
    color: '#6B7280',
  },

  footer: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
