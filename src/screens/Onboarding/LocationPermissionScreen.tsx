import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { COLORS, IMAGES } from '@/constant';
import { CustomButton, Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import localStyles from './styles';
import styles from '../Auth/styles';

const LocationPermissionScreen = () => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      {/* BACK */}
      <TouchableOpacity style={styles.backBtn}>
        <Icon type={Icons.Ionicons} name="arrow-back" />
      </TouchableOpacity>

      {/* TOP VISUAL */}
      <View style={localStyles.topContainer}>
        <Image
          source={IMAGES.LocationPermission}
          style={localStyles.topImage}
          resizeMode="contain"
        />
      </View>
      {/* CARD */}
      <View style={styles.card}>
        {/* PERMISSION TAG */}
        <View style={localStyles.tag}>
          <Text style={localStyles.tagText}>PERMISSIONS</Text>
        </View>

        {/* TITLE */}
        <Text style={styles.title}>Enable Your Location</Text>

        {/* SUBTITLE */}
        <Text style={styles.subtitle}>
          We use your location to show nearby saved places and help you pin new
          ones. Your data stays private.
        </Text>

        {/* BADGES */}
        <View style={localStyles.badgeRow}>
          <View style={localStyles.badge}>
            <Icon type={Icons.Feather} name="shield" size={14} color="green" />
            <Text style={localStyles.badgeText}>Private & Secure</Text>
          </View>

          <View style={localStyles.badge}>
            <Icon type={Icons.Feather} name="lock" size={14} color="orange" />
            <Text style={localStyles.badgeText}>Change Anytime</Text>
          </View>
        </View>

        {/* BUTTON */}
        <CustomButton
          title="Enable Location"
          onPress={() => {}}
          containerStyle={styles.button}
        />

        {/* SECONDARY BUTTON */}
        <TouchableOpacity style={localStyles.secondaryBtn}>
          <Text style={localStyles.secondaryText}>Maybe Later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationPermissionScreen;
