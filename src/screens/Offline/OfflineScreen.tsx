import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { COLORS } from '@/constant';
import { Icon, Icons } from '@/components';
import CustomMarker from '@/components/CustomMarker';
import HeaderSearch from '@/components/HeaderSearch';

const markers = [
  {
    id: 1,
    title: 'Park Hyatt',
    type: 'hotel',
    coordinate: { latitude: 40.7128, longitude: -74.006 },
  },
  {
    id: 2,
    title: 'Senso-ji',
    type: 'temple',
    coordinate: { latitude: 40.7138, longitude: -74.002 },
  },
];

const OfflineScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 40.7128,
          longitude: -74.006,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {markers.map(item => (
          <Marker key={item.id} coordinate={item.coordinate}>
            <CustomMarker item={item} />
          </Marker>
        ))}
      </MapView>

      <HeaderSearch
        onSearchPress={() => {}}
        onFilterPress={() => {}}
        onNotificationPress={() => {}}
        initials="JD"
        isOffline={true}
      />

      {/* RIGHT CONTROLS */}
      <View style={styles.controls}>
        <ControlBtn icon="plus" />
        <ControlBtn icon="minus" />
        <ControlBtn icon="crosshair" />
      </View>
    </View>
  );
};

export default OfflineScreen;

const ControlBtn = ({ label, icon }: any) => (
  <View style={styles.controlBtn}>
    {icon ? (
      <Icon type={Icons.Feather} name={icon} size={20} />
    ) : (
      <Text>{label}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  markerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },

  markerLabel: {
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  markerText: {
    color: '#fff',
    fontSize: 12,
  },

  userDot: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.primary,
  },

  controls: {
    position: 'absolute',
    right: 20,
    bottom: 120,
  },

  controlBtn: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
