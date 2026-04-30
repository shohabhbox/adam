import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const DeleteAccountScreen = () => {
  const navigation = useAppNavigation<'DeleteAccount'>();

  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon
            type={Icons.Ionicons}
            name="arrow-back"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Delete Account</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* WARNING BOX */}
      <View style={styles.warningBox}>
        <View style={styles.warningHeader}>
          <View style={styles.warningIcon}>
            <Icon type={Icons.Feather} name="alert-triangle" color="#EF4444" />
          </View>

          <Text style={styles.warningTitle}>This cannot be undone</Text>
        </View>

        <Bullet text="All trips and data will be permanently removed" />
        <Bullet text="Saved locations will be deleted" />
        <Bullet text="Subscription will be cancelled immediately" />
        <Bullet text="Your account cannot be recovered" />
      </View>

      {/* USER CARD */}
      <View style={styles.userCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>

        <View>
          <Text style={styles.name}>Jane Doe</Text>
          <Text style={styles.email}>jane.doe@gmail.com</Text>
        </View>
      </View>

      {/* PASSWORD */}
      <Text style={styles.label}>CONFIRM PASSWORD</Text>

      <View style={styles.inputWrap}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secure}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Icon type={Icons.Feather} name={secure ? 'eye' : 'eye-off'} />
        </TouchableOpacity>
      </View>

      <Text style={styles.helper}>
        Enter your current password to confirm deletion.
      </Text>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.deleteBtn}>
          <Text style={styles.deleteText}>Permanently Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteAccountScreen;

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

  /* HEADER */
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  headerTitle: {
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

  /* WARNING */
  warningBox: {
    margin: 20,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FCA5A5',
    backgroundColor: '#FEF2F2',
  },

  warningHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  warningIcon: {
    marginRight: 8,
  },

  warningTitle: {
    fontWeight: '600',
  },

  bulletRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },

  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EF4444',
    marginRight: 8,
    marginTop: 6,
  },

  bulletText: {
    fontSize: 12,
    color: '#7F1D1D',
  },

  /* USER */
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#fff',
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#0EA5A8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  avatarText: {
    color: '#fff',
    fontWeight: '600',
  },

  name: {
    fontWeight: '600',
  },

  email: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  /* INPUT */
  label: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 11,
    color: '#9CA3AF',
  },

  inputWrap: {
    marginHorizontal: 20,
    marginTop: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: 44,
  },

  helper: {
    marginHorizontal: 20,
    marginTop: 6,
    fontSize: 11,
    color: '#8B8CA7',
  },

  /* FOOTER */
  footer: {
    marginTop: 'auto',
    padding: 20,
  },

  deleteBtn: {
    backgroundColor: '#EF4444',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  deleteText: {
    color: '#fff',
    fontWeight: '600',
  },

  cancelBtn: {
    marginTop: 10,
    backgroundColor: '#E5E7EB',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  cancelText: {
    color: '#374151',
  },
});
