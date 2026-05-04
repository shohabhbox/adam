import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon, Icons } from '@/components';
import { SCREENS } from '@/constant/config';
import { useNavigation } from '@react-navigation/native';


export interface Place {
  id: string;
  title: string;
  type: string;
  image: string;
  location?: string; // Optional: added to match your updated PlaceItem
}

const PlaceItem = ({
  title = 'Unknown Place',
  type = 'General',
  location = 'Location not set',
  image = 'https://img.freepik.com/free-photo/beautiful-water-villas-tropical-maldives-island-sunrise-time_1232-4484.jpg?semt=ais_hybrid&w=740&q=80',
}: Place) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(SCREENS.SavedLocationDetail as never)}
      activeOpacity={0.7}
    >
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <Text style={styles.locationText} numberOfLines={1}>
          {location}
        </Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>{type}</Text>
        </View>
      </View>

      <Icon
        type={Icons.Feather}
        name="chevron-right"
        size={20}
        color="#8B8CA7"
      />
    </TouchableOpacity>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 15,
    marginBottom: 12, // Changed from marginTop for better list spacing
    alignItems: 'center',
    // Optional: add a light shadow for better depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 12,
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    fontSize: 15,
    color: '#1A1A1A',
    marginBottom: 2,
  },
  locationText: {
    fontFamily: 'Plus Jakarta Sans',
    color: '#8B8CA7',
    fontSize: 12,
    marginBottom: 4,
  },
  tag: {
    backgroundColor: '#E6F4F2',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  tagText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 10,
    fontWeight: '600',
    color: '#0EA5A8',
    textTransform: 'uppercase',
  },
});
