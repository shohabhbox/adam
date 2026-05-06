import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '@/constant/config';

interface AlertModalProps {
  visible: boolean;
  title: string;
  description: string;
  onClick: () => void;
  onCancel: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
  visible,
  title,
  description,
  onClick,
  onCancel,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.alertOverlay}>
        <View style={styles.alertBox}>
          <Text style={styles.alertTitle}>{title}</Text>

          <Text style={styles.alertDescription}>{description}</Text>

          <View style={styles.alertActions}>
            <TouchableOpacity style={styles.alertCancelBtn} onPress={onCancel}>
              <Text style={styles.alertCancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.alertConfirmBtn} onPress={onClick}>
              <Text style={styles.alertConfirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;


const styles = StyleSheet.create({
    alertOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.35)',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 24,
},

alertBox: {
  width: '100%',
  backgroundColor: '#FFFFFF',
  borderRadius: 18,
  padding: 20,
},

alertTitle: {
  fontSize: 18,
  fontWeight: '700',
  color: '#111827',
  textAlign: 'center',
},

alertDescription: {
  fontSize: 14,
  color: '#6B7280',
  textAlign: 'center',
  marginTop: 10,
  lineHeight: 20,
},

alertActions: {
  flexDirection: 'row',
  marginTop: 22,
},

alertCancelBtn: {
  flex: 1,
  paddingVertical: 14,
  borderRadius: 12,
  backgroundColor: '#F3F4F6',
  alignItems: 'center',
  marginRight: 8,
},

alertCancelText: {
  color: '#6B7280',
  fontWeight: '600',
},

alertConfirmBtn: {
  flex: 1,
  paddingVertical: 14,
  borderRadius: 12,
  backgroundColor: COLORS.primary,
  alignItems: 'center',
  marginLeft: 8,
},

alertConfirmText: {
  color: '#FFFFFF',
  fontWeight: '600',
},
})