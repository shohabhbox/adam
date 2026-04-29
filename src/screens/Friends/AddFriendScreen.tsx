import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { COLORS } from '@/constant';

const AddFriendScreen = () => {
  const navigation = useAppNavigation<'AddFriend'>();

  const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

          <Text style={styles.title}>Add Friend</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* CARD */}
        <View style={styles.card}>
          {/* SEARCH */}
          <Text style={styles.label}>SEARCH</Text>

          <View style={styles.inputBox}>
            <Icon type={Icons.Feather} name="search" />
            <TextInput
              placeholder="Search by name..."
              value={search}
              onChangeText={setSearch}
              style={styles.input}
            />
          </View>

          {/* DIVIDER */}
          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.or}>OR INVITE VIA</Text>
            <View style={styles.line} />
          </View>

          {/* EMAIL */}
          <Text style={styles.label}>EMAIL</Text>

          <View style={styles.inputBox}>
            <Icon type={Icons.Feather} name="mail" />
            <TextInput
              placeholder="friend@email.com"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
            />
          </View>
        </View>

        {/* INFO */}
        <View style={styles.infoBox}>
          <View style={styles.dot} />
          <Text style={styles.infoText}>
            An invite link will be sent via email.
          </Text>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Send Invite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddFriendScreen;

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

  /* CARD */
  card: {
    margin: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
  },

  label: {
    fontSize: 11,
    color: '#9CA3AF',
    marginBottom: 6,
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    height: 44,
  },

  /* DIVIDER */
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },

  or: {
    marginHorizontal: 10,
    fontSize: 11,
    color: '#9CA3AF',
  },

  /* INFO */
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#E6F4F2',
    padding: 12,
    borderRadius: 12,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginRight: 8,
  },

  infoText: {
    fontSize: 12,
    color: '#374151',
  },

  /* FOOTER */
  footer: {
    padding: 20,
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },
});
