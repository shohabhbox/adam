import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { CustomButton, Icon, Icons } from '@/components';
import { COLORS, IMAGES } from '@/constant';
import styles from '../Auth/styles';
import localStyles from './styles';

const LocationPermissionScreen = () => {
  const navigation = useAppNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={styles.container}>
 
        <View style={localStyles.topContainer}>
          <Image
            source={IMAGES.LocationPermission}
            style={localStyles.topImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.card}>
          {/* PERMISSION TAG */}
          <View style={localStyles.tag}>
            <Text style={localStyles.tagText}>PERMISSIONS</Text>
          </View>

          {/* TITLE */}
          <Text style={styles.title}>Enable Your Location</Text>

          {/* SUBTITLE */}
          <Text style={styles.subtitle}>
            We use your location to show nearby saved places and help you pin
            new ones. Your data stays private.
          </Text>

          {/* BADGES */}
          <View style={localStyles.badgeRow}>
            <View style={localStyles.badge}>
              <Icon
                type={Icons.Feather}
                name="shield"
                size={14}
                color="green"
              />
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
            onPress={() => {
              navigation.navigate('AppNavigator');
            }}
            containerStyle={styles.button}
          />

          {/* SECONDARY BUTTON */}
          <TouchableOpacity style={localStyles.secondaryBtn}>
            <Text style={localStyles.secondaryText}>Maybe Later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LocationPermissionScreen;
