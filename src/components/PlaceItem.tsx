import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon, Icons } from '@/components';
import { SCREENS } from '@/constant/config';
import { useNavigation } from '@react-navigation/native';

const PlaceItem = ({ title, type }: any) => {
  const navigation = useNavigation();
  let url =
    'https://img.freepik.com/free-photo/beautiful-water-villas-tropical-maldives-island-sunrise-time_1232-4484.jpg?semt=ais_hybrid&w=740&q=80';
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(SCREENS.SavedLocationDetail as never)}
    >
      <Image source={{ uri: url }} style={styles.image} />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.location}>Paris</Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>{type}</Text>
        </View>
      </View>

      <Icon type={Icons.Feather} name="chevron-right" />
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
    marginTop: 15,
    alignItems: 'center',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  title: {
    fontWeight: '600',
  },

  location: {
    color: '#8B8CA7',
    fontSize: 12,
  },

  tag: {
    marginTop: 5,
    backgroundColor: '#E6F4F2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  tagText: {
    fontSize: 10,
    color: '#0EA5A8',
  },
});
