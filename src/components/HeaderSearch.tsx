import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Icon, Icons } from '@/components';
import { COLORS, SCREENS } from '@/constant/config';
import { useNavigation } from '@react-navigation/native';
const HeaderSearch = ({
  onSearchPress,
  onFilterPress,
  onNotificationPress,
  initials = 'JD',
  isOffline = false,
}: {
  onSearchPress: () => void;
  onFilterPress: () => void;
  onNotificationPress: () => void;
  initials?: string;
  isOffline?: boolean;
}) => {
  const navigation = useNavigation();
  function onProfilePress() {
    navigation.navigate(SCREENS.ProfileScreen as any);
  }
  return (
    <LinearGradient
      colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.0)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradientWrapper}
    >
      <View style={styles.header}>
        <Text style={styles.logo}>PilotIQ</Text>

        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.circleBtn}
            onPress={onNotificationPress}
            activeOpacity={0.7}
          >
            <Icon
              type={Icons.Ionicons}
              name="notifications-outline"
              size={20}
              color="#0B132B"
              onPress={onNotificationPress}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.avatar} onPress={onProfilePress}>
            <Text style={styles.avatarText}>{initials}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isOffline ? (
        <View style={styles.content}>
          {/* Left-hand icon: The WiFi-off icon matching the image style */}
          <Icon
            type={Icons.MaterialCommunityIcons} // MaterialCommunityIcons has a good 'wifi-off' icon
            name="wifi-off"
            size={18} // Adjusted size for legibility
            color="#A1A7B3" // A warm grey/blue, similar to the image icon
            style={styles.icon}
          />

          {/* Text Area */}
          <View style={styles.textGroup}>
            {/* Main heading text */}
            <Text style={styles.title}>You are offline</Text>

            {/* Separator dot and description text */}
            <Text style={styles.description}> · Showing saved pins only</Text>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.searchBar}
          onPress={onSearchPress}
          activeOpacity={0.9}
        >
          <View style={styles.searchLeft}>
            <Icon
              type={Icons.Feather}
              name="search"
              size={18}
              color="#9CA3AF"
            />
            <Text style={styles.searchText}>Search places, categories...</Text>
          </View>

          <TouchableOpacity
            style={styles.filterBtn}
            onPress={onFilterPress}
            activeOpacity={0.7}
          >
            <Icon
              type={Icons.Feather}
              name="filter"
              size={18}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 22,
    fontWeight: '700',
    color: '#0B132B',
    letterSpacing: -0.5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    // Soft shadow for depth
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: COLORS.textPrimary,
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 14,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  searchLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#9CA3AF',
  },
  filterBtn: {
    backgroundColor: '#97979733',
    padding: 10,
    borderRadius: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 12,
  },
  icon: {
    marginRight: 10,
  },
  textGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 14,
    color: '#FFF',
    fontWeight: '600',
  },
  description: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '400',
  },
});

export default HeaderSearch;
