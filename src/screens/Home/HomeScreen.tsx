import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS, SCREENS } from '@/constant';
import { Icon, Icons } from '@/components';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FilterModal from '@/components/modal/FilterModal';
import HeaderSearch from '@/components/HeaderSearch';
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

  return (
    <View style={styles.container}>
      {/* GOOGLE MAP */}
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        mapType="hybridFlyover"
        initialRegion={{
          latitude: 40.7128,
          longitude: -74.006,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: 40.7128,
            longitude: -74.006,
          }}
        />
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
    </View>
  );
};

export default HomeScreen;
