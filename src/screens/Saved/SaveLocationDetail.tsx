import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { COLORS, IMAGES, SCREENS } from '@/constant';
import { Icon, Icons, CustomButton } from '@/components';
import Tag from '@/components/CustomTag';

const SavedLocationDetail = ({ navigation }: { navigation: any }) => {
  function onCategorize() {
    navigation.navigate(SCREENS.SelectCategoryScreen);
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon
            type={Icons.Ionicons}
            name="arrow-back"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Location Detail</Text>

        <TouchableOpacity style={styles.favBtn}>
          <Icon type={Icons.Ionicons} name="heart" color="#FF4D6D" size={22} />
        </TouchableOpacity>
      </View>

      {/* IMAGE */}
      <View style={styles.imageWrapper}>
        <Image source={IMAGES.locationSample} style={styles.image} />

        {/* COORDINATE BADGE */}
        <View style={styles.coord}>
          <Text style={styles.coordText}>35.6595° N, 139.7004° E</Text>
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>Eiffel Tower</Text>

        <View style={styles.row}>
          <Icon type={Icons.Feather} name="map-pin" size={14} />
          <Text style={styles.location}>
            1–chome Dōgenzaka, Shibuya City, Tokyo
          </Text>
        </View>

        <Text style={styles.pinned}>Pinned just now</Text>

        {/* DESCRIPTION */}
        <View style={styles.descBox}>
          <Text style={styles.desc}>
            Shibuya Crossing is one of the world's busiest pedestrian crossings,
            located in front of Shibuya Station.
          </Text>

          {/* TAGS */}
          <View style={styles.tagRow}>
            <Tag label="Landmark" />
            <Tag label="Urban" />
            <Tag label="Popular Spot" />
          </View>
        </View>
      </View>

      {/* BUTTONS */}
      <View style={styles.bottom}>
        <CustomButton
          title="Add to Trip"
          onPress={() => {
            navigation.navigate(SCREENS.AddToTripScreen);
          }}
        />

        <TouchableOpacity style={styles.outlineBtn} onPress={onCategorize}>
          <Text style={styles.outlineText}>Categorize</Text>
        </TouchableOpacity>

        <Text style={styles.delete}>Delete Location</Text>
      </View>
    </View>
  );
};

export default SavedLocationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontWeight: '600',
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  favBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FF4D6D20',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageWrapper: {
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 180,
  },

  coord: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#00000080',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  coordText: {
    color: '#fff',
    fontSize: 12,
  },

  content: {
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    marginTop: 5,
  },

  location: {
    marginLeft: 5,
    color: '#8B8CA7',
  },

  pinned: {
    marginTop: 5,
    color: '#8B8CA7',
    fontSize: 12,
  },

  descBox: {
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
  },

  desc: {
    color: '#555',
    lineHeight: 20,
  },

  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  tag: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 8,
    marginTop: 5,
  },

  tagText: {
    color: COLORS.primary,
    fontSize: 12,
  },

  bottom: {
    marginTop: 'auto',
    marginBottom: 20,
  },

  outlineBtn: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },

  outlineText: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  delete: {
    textAlign: 'center',
    marginTop: 10,
    color: '#8B8CA7',
  },
});
