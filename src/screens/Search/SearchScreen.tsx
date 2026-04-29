import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import { Icon, Icons } from '@/components';
import styles from './styles';
import { SCREENS } from '@/constant/config';

const SearchScreen = ({ navigation }: any) => {
  function handleLocationPress() {
    navigation.navigate(SCREENS.LocationDetailScreen);
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.circleBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon type={Icons.Ionicons} name="arrow-back" />
        </TouchableOpacity>

        <View style={styles.avatar}>
          <Text>JD</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SEARCH BAR */}
        <View style={styles.searchBar}>
          <Icon type={Icons.Feather} name="search" />
          <Text style={styles.searchText}>Coffee shops nearby...</Text>
        </View>

        {/* RECENT */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>RECENT SEARCHES</Text>
          <Text style={styles.clear}>Clear</Text>
        </View>

        {recentData.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.recentItem}
            onPress={handleLocationPress}
          >
            <View style={styles.iconBox}>
              <Icon type={Icons.Feather} name="clock" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.recentTitle}>{item.title}</Text>
              <Text style={styles.recentSub}>{item.results}</Text>
            </View>

            <Icon type={Icons.Feather} name="arrow-up-right" />
          </TouchableOpacity>
        ))}

        {/* TRENDING */}
        <Text style={styles.sectionTitle}>TRENDING NOW</Text>

        <View style={styles.trendingRow}>
          {trendingData.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.trendingCard}
              onPress={handleLocationPress}
            >
              <Image source={{ uri: item.image }} style={styles.trendingImg} />
              <Text style={styles.trendingText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* NEARBY */}
        <Text style={styles.sectionTitle}>NEARBY PLACES</Text>

        {placesData.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.placeCard}
            onPress={handleLocationPress}
          >
            <Image source={{ uri: item.image }} style={styles.placeImg} />

            <View style={{ flex: 1 }}>
              <Text style={styles.placeTitle}>{item.title}</Text>

              <View style={styles.metaRow}>
                <Text style={styles.tag}>{item.type}</Text>
                <Text style={styles.distance}>{item.distance}</Text>
              </View>

              <Text style={styles.rating}>⭐ {item.rating}</Text>
            </View>

            <Icon type={Icons.Feather} name="chevron-right" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

let url =
  'https://img.freepik.com/free-photo/beautiful-water-villas-tropical-maldives-island-sunrise-time_1232-4484.jpg?semt=ais_hybrid&w=740&q=80';
const recentData = [
  { title: 'Coffee shops near me', results: '12 results' },
  { title: 'Central Park viewpoints', results: '4 results' },
  { title: 'Best rooftop bars NYC', results: '8 results' },
];

const trendingData = [
  { title: 'Hidden Gems', image: url },
  { title: 'Sunset Spots', image: url },
];

const placesData = [
  {
    title: 'Shinjuku Gyoen',
    type: 'Park',
    distance: '0.3 km',
    rating: '4.9',
    image: url,
  },
];
