import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS, SCREENS } from '@/constant';
import { Icon, Icons } from '@/components';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FilterModal from '@/components/modal/FilterModal';
import HeaderSearch from '@/components/HeaderSearch';
import AppScreen from '@/components/AppScreen';
const HomeScreen = ({ navigation }: any) => {
  const mapRef = useRef(null);
  const insets = useSafeAreaInsets();
  const [isFilterModalVisible, setFilterModalVisible] = React.useState(false);

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  function handleSearchPress() {
    navigation.navigate(SCREENS.SearchScreen);
  }

  // Mock Data: Near by locations
  const NEARBY_LOCATIONS = [
    {
      id: 1,
      title: 'Location 1',
      coordinate: { latitude: 40.7128, longitude: -74.006 },
      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=500',
    },
    {
      id: 2,
      title: 'Location 2',
      coordinate: { latitude: 40.715, longitude: -74.008 },
      image:
        'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=500',
    },
    {
      id: 3,
      title: 'Central Park View',
      coordinate: { latitude: 40.7135, longitude: -74.002 },
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=500',
    },
    {
      id: 4,
      title: 'Downtown Plaza',
      coordinate: { latitude: 40.7182, longitude: -74.004 },
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=500',
    },
    {
      id: 5,
      title: 'Skyline Terrace',
      coordinate: { latitude: 40.711, longitude: -74.012 },
      image:
        'https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=500',
    },
    {
      id: 6,
      title: 'Riverside Walk',
      coordinate: { latitude: 40.7142, longitude: -74.015 },
      image:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=500',
    },
    {
      id: 7,
      title: 'The Urban Garden',
      coordinate: { latitude: 40.7168, longitude: -74.009 },
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=500',
    },
    {
      id: 8,
      title: 'Sunset Point',
      coordinate: { latitude: 40.7195, longitude: -74.001 },
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500',
    },
  ];

  function onMarkerClick() {
    navigation.navigate(SCREENS.LocationDetailScreen);
  }

  return (
    
    <AppScreen style={styles.container} backgroundColor={COLORS.white} >
      {/* GOOGLE MAP */}
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 40.7145,
          longitude: -74.007,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {NEARBY_LOCATIONS.map(loc => (
          <Marker key={loc.id} coordinate={loc.coordinate} title={loc.title}>
            {/* Custom Circular Image Marker */}
            <TouchableOpacity style={styles.markerWrapper} onPress={onMarkerClick}>
              <TouchableOpacity onPress={onMarkerClick}  style={styles.circle}>
                <Image source={{ uri: loc.image }} style={styles.markerImage} />
              </TouchableOpacity>
              {/* Niche wala chota triangle (Anchor) */}
              <View style={styles.arrow} />
            </TouchableOpacity>
          </Marker>
        ))}
      </MapView>

      <HeaderSearch
        onSearchPress={handleSearchPress}
        onFilterPress={toggleFilterModal}
        onNotificationPress={() => {
          navigation.navigate(SCREENS.NotificationsScreen);
        }}
        initials="JD"
      />

      {/* MAP CONTROLS */}
      <View style={[styles.controls, { bottom: insets.bottom + 90 }]}>
        <TouchableOpacity style={styles.controlBtn}>
          <Icon type={Icons.Feather} name="plus" color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlBtn}>
          <Icon type={Icons.Feather} name="minus" color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlBtn}>
          <Icon type={Icons.Ionicons} name="locate-outline" color="#000" />
        </TouchableOpacity>
      </View>

      <FilterModal
        isVisible={isFilterModalVisible}
        onClose={toggleFilterModal}
      />
    </AppScreen>
  );
};

export default HomeScreen;

