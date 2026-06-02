import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { COLORS, SCREENS } from '@/constant/config';
import AppScreen from '@/components/AppScreen';
import AlertModal from '@/components/modal/AlertModal';

const ProfileStat = ({ value, label }: any) => {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
};

const ProfileMenuItem = ({ icon, title, subtitle, badge, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <View style={styles.iconBox}>
          <Icon
            type={Icons.Feather}
            name={icon}
            size={16}
            color={COLORS.icon}
          />
        </View>

        <View>
          <Text style={styles.menuTitle}>{title}</Text>
          {subtitle && <Text style={styles.menuSub}>{subtitle}</Text>}
        </View>
      </View>

      <View style={styles.menuRight}>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}

        <Icon type={Icons.Feather} name="chevron-right" size={16} />
      </View>
    </TouchableOpacity>
  );
};

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  return (
    <AppScreen>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => navigation.goBack()}
            >
              <Icon type={Icons.Ionicons} name="arrow-back" disabled={true} />
            </TouchableOpacity>
          </View>

          {/* PROFILE */}
          <View style={styles.profile}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>

            <Text style={styles.name}>Jane Doe</Text>
            <Text style={styles.email}>jane.doe@gmail.com</Text>
          </View>

          {/* STATS */}
          <View style={styles.statsRow}>
            <ProfileStat value="5" label="Trips" />
            <ProfileStat value="24" label="Places" />
            <ProfileStat value="8" label="Countries" />
          </View>

          {/* MENU */}
          <View style={styles.card}>
            <ProfileMenuItem
              icon="users"
              title="Friends"
              subtitle="22 Friends"
              badge="2"
              onPress={() => {
                navigation.navigate(SCREENS.FriendsScreen);
              }}
            />

            <ProfileMenuItem
              icon="clock"
              title="Invitation"
              subtitle="2 new invitations"
              badge="3"
              onPress={() => {
                navigation.navigate(SCREENS.InvitationsScreen);
              }}
            />

            <ProfileMenuItem
              icon="clock"
              title="Travel Memory Timeline"
              subtitle="5 past trips"
              onPress={() => {
                navigation.navigate(SCREENS.TravelTimelineScreen);
              }}
            />

            <ProfileMenuItem
              icon="map-pin"
              title="Saved Locations"
              subtitle="24 places"
              onPress={() => {
                navigation.navigate('MainTabs', {
                  screen: 'Saved',
                });
              }}
            />

            <ProfileMenuItem
              icon="credit-card"
              title="Subscription"
              subtitle="Upgrade to Premium"
              onPress={() => {
                navigation.navigate(SCREENS.UpgradePremiumScreen);
              }}
            />

            <ProfileMenuItem
              icon="settings"
              title="Settings"
              onPress={() => {
                navigation.navigate(SCREENS.SettingsScreen);
              }}
            />
          </View>

          {/* LOGOUT */}
          <TouchableOpacity
            style={styles.logout}
            onPress={() => {
              setShowAlert(true);
            }}
          >
            <Icon
              type={Icons.Feather}
              name="log-out"
              color="#EF4444"
              disabled={true}
            />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>

        <AlertModal
          visible={showAlert}
          title="Logout?"
          description="Are you sure you want to logout?"
          onCancel={() => setShowAlert(false)}
          onClick={() => {
            setShowAlert(false);
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'AuthStack',
                  params: {
                    screen: 'Login',
                  },
                },
              ],
            });
            // your action here
          }}
        />
      </View>
    </AppScreen>
  );
};

export default ProfileScreen;
