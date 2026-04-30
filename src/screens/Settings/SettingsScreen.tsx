import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { COLORS, SCREENS } from '@/constant/config';

const SettingsScreen = () => {
  const navigation = useAppNavigation<'Settings'>();

  const Item = ({ icon, title, sub, danger, onPress }: any) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.left}>
        <View style={styles.iconWrap}>
          <Icon type={Icons.Feather} name={icon} size={16} />
        </View>

        <View>
          <Text style={[styles.itemTitle, danger && styles.dangerText]}>
            {title}
          </Text>
          {sub && <Text style={styles.sub}>{sub}</Text>}
        </View>
      </View>

      <Icon type={Icons.Feather} name="chevron-right" size={16} />
    </TouchableOpacity>
  );

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

          <Text style={styles.title}>Settings</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* ACCOUNT */}
        <Text style={styles.section}>ACCOUNT</Text>

        <TouchableOpacity style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Jane Doe</Text>
            <Text style={styles.email}>jane.doe@gmail.com</Text>
          </View>

          <Icon type={Icons.Feather} name="chevron-right" />
        </TouchableOpacity>

        {/* PREFERENCES */}
        <Text style={styles.section}>PREFERENCES</Text>

        <View style={styles.card}>
          <Item
            icon="shield"
            title="Privacy"
            sub="Location, data sharing"
            onPress={() => {
              navigation.navigate(SCREENS.HelpSupportScreen);
            }}
          />
          <Item
            icon="bell"
            title="Notifications"
            sub="Push, reminders"
            onPress={() => navigation.navigate(SCREENS.NotificationsScreen)}
          />
          <Item icon="database" title="Data Management" sub="Storage, cache" />
          <Item icon="info" title="About" sub="Version 2.4.1" />
        </View>

        {/* DANGER ZONE */}
        <Text style={styles.section}>DANGER ZONE</Text>

        <View style={styles.card}>
          <Item
            icon="trash-2"
            title="Delete Account"
            danger
            onPress={() => {
              navigation.navigate(SCREENS.DeleteAccountScreen);
            }}
          />
          <Item icon="log-out" title="Log Out" danger />
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

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

  /* SECTION */
  section: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 8,
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600',
  },

  /* PROFILE */
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.primary,
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

  /* CARD */
  card: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  itemTitle: {
    fontSize: 13,
    color: '#111827',
    fontWeight: '500',
  },

  sub: {
    fontSize: 11,
    color: '#8B8CA7',
  },

  dangerText: {
    color: '#EF4444',
  },
});
