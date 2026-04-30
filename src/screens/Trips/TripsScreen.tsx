import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import TripCard from '@/components/TripCard';
import styles from './styles';
import { SCREENS } from '@/constant/config';

const TripsScreen = ({ navigation }: { navigation: any }) => {
  function handleCreateTrip() {
    navigation.navigate(SCREENS.CreateTripScreen);
  }

  function onProfilePress() {
    navigation.navigate(SCREENS.ProfileScreen as any);
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>My Trips</Text>

        <View style={styles.right}>
          <TouchableOpacity style={styles.newBtn} onPress={handleCreateTrip}>
            <Text style={styles.newText}>+ New</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.avatar} onPress={onProfilePress}>
            <Text>JD</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <TripCard title="Greece Island Hop" role="Owner" />
        <TripCard title="Italy 2025" role="Editor" />
        <TripCard title="Japan Spring" role="Viewer" />
        <TripCard title="Seville Weekend" role="Viewer" />
      </ScrollView>
    </View>
  );
};

export default TripsScreen;
