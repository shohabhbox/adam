import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { Icon, Icons } from '@/components';
import { IMAGES } from '@/constant/config';
import { useNavigation } from '@react-navigation/native';

const TripHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.headerTopRow}>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon type={Icons.Ionicons} name="arrow-back" />
        </TouchableOpacity>

        <Text>Trip Detail</Text>

        <TouchableOpacity
          style={styles.leaveBtn}
          onPress={() => navigation.navigate('ManageMembersScreen' as never)}
        >
          <Text style={styles.leaveText}>Manage</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.headerWrapper}>
        <Image source={IMAGES.locationSample} style={styles.headerImage} />

        <TouchableOpacity style={styles.editOverlay} onPress={() => navigation.navigate('EditTripScreen' as never)}>
          <Text style={styles.editText}>Edit Trip</Text>
        </TouchableOpacity>

        <View style={styles.headerOverlay}>
          <Text style={styles.tripTitle}>Greece Island Hop</Text>
          <Text style={styles.subText}>Santorini · Athens · Mykonos</Text>
          <Text style={styles.subText}>May 18 – Jun 2 · 15 nights</Text>
        </View>
      </View>
    </View>
  );
};

export default TripHeader;
