import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@/constant';

const LocationCard = ({ item }: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={() => {
        navigation.navigate(SCREENS.ImportLocationDetailScreen as never);
      }}
    >
      {/* IMAGE */}
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.mapPin}>
          <Icon type={Icons.Feather} name="map-pin" color="#fff" size={16} />
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <View style={styles.rowBetween}>
          <Text style={styles.name}>{item.title}</Text>

          <TouchableOpacity
            style={[styles.saveBtn, item.saved && styles.savedBtn]}
          >
            <Text style={[styles.saveText, item.saved && styles.savedText]}>
              {item.saved ? 'Saved' : 'Save'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.meta}>{item.location}</Text>
        <Text style={styles.meta}>{item.date}</Text>

        {/* TAGS */}
        <View style={styles.tags}>
          <View style={styles.tagPrimary}>
            <Text style={styles.tagPrimaryText}>Landmark</Text>
          </View>

          <View style={styles.tagSecondary}>
            <Text style={styles.tagSecondaryText}>Japan Spring Trip</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;
