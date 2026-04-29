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
import { COLORS } from '@/constant';

interface Props {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const MarkCompleteModal: React.FC<Props> = ({
  visible,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal isVisible={visible} style={{ margin: 0 }}>
      <View style={styles.fullScreenContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconBtn} onPress={onClose}>
              <Icon type={Icons.Ionicons} name="arrow-back" onPress={onClose} />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Mark as Completed</Text>

            <View style={{ width: 40 }} />
          </View>

          {/* ICON */}
          <View style={styles.successIcon}>
            <Icon type={Icons.Feather} name="check" size={30} color="#fff" />
          </View>

          {/* TITLE */}
          <Text style={styles.completeTitle}>Trip Completed! 🎉</Text>

          <Text style={styles.completeDesc}>
            Mark <Text style={{ fontWeight: '600' }}>Greece Island Hop</Text> as
            completed to archive it and see your travel stats.
          </Text>

          {/* SUMMARY */}
          <Text style={styles.sectionLabel}>TRIP SUMMARY</Text>

          <View style={styles.summaryRow}>
            <SummaryBox value="9" label="Places visited" />
            <SummaryBox value="15" label="Nights total" />
            <SummaryBox value="4" label="Travellers joined" />
          </View>

          {/* BENEFITS */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>When you mark as completed</Text>

            <BenefitItem text='Earn a "Completed" badge' />
            <BenefitItem text="Unlock photo memories collage" />
            <BenefitItem text="Trip moves to Completed" />
          </View>

          {/* DATE */}
          <View style={styles.dateBox}>
            <Icon type={Icons.Feather} name="calendar" size={16} />
            <Text style={styles.dateText}>May 18 – Jun 2, 2026</Text>

            <View style={styles.dateBadge}>
              <Text style={styles.dateBadgeText}>Confirmed dates</Text>
            </View>
          </View>
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.primaryBtn} onPress={onConfirm}>
            <Text style={styles.primaryText}>Mark as Completed</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn} onPress={onClose}>
            <Text style={styles.secondaryText}>Not Yet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MarkCompleteModal;

const SummaryBox = ({ value, label }: any) => (
  <View style={styles.summaryBox}>
    <Text style={styles.summaryValue}>{value}</Text>
    <Text style={styles.summaryLabel}>{label}</Text>
  </View>
);

const BenefitItem = ({ text }: any) => (
  <View style={styles.benefitRow}>
    <Icon type={Icons.Feather} name="check-circle" size={16} color="#10B981" />
    <Text style={styles.benefitText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#F2F4F7',
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

  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  completeTitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
  },

  completeDesc: {
    textAlign: 'center',
    marginTop: 10,
    color: '#8B8CA7',
    paddingHorizontal: 40,
  },

  sectionLabel: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 12,
    color: '#9CA3AF',
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  summaryBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
    width: '30%',
  },

  summaryValue: {
    fontSize: 18,
    fontWeight: '700',
  },

  summaryLabel: {
    fontSize: 11,
    color: '#8B8CA7',
    marginTop: 4,
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

  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  benefitText: {
    marginLeft: 10,
    fontSize: 13,
  },

  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F4F2',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 12,
  },

  dateText: {
    marginLeft: 8,
    flex: 1,
  },

  dateBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  dateBadgeText: {
    fontSize: 11,
    color: '#059669',
  },

  footer: {
    padding: 20,
    backgroundColor: '#fff',
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  secondaryBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  secondaryText: {
    color: '#6B7280',
    fontSize: 15,
    fontWeight: '500',
  },
});
