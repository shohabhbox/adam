import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import styles from './styles';
import PlaceItem from '@/components/PlaceItem';
import CategoryCard from '@/components/CategoryCard';
import { SCREENS } from '@/constant';

const SavedScreen = ({ navigation }: any) => {
  function onProfilePress() {
    navigation.navigate(SCREENS.ProfileScreen as any);
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.small}>My Places</Text>
            <Text style={styles.title}>Recently Saved</Text>
          </View>

          <TouchableOpacity onPress={onProfilePress} style={styles.avatar}>
            <Text>JD</Text>
          </TouchableOpacity>
        </View>

        {/* CATEGORIES */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.link}>See all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CategoryCard title="Paris" count={7} />
          <CategoryCard title="Tokyo 2026" count={12} />
          <CategoryCard title="Europe" count={24} />
        </ScrollView>

        {/* RECENT */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Recently Saved</Text>
          <Text style={styles.link}>View all</Text>
        </View>

        <PlaceItem title="Eiffel Tower" type="Landmark" />
        <PlaceItem title="Café de Flore" type="Café" />
        <PlaceItem title="Shibuya Crossing" type="Urban" />
        <PlaceItem title="Oia Sunset Point" type="Nature" />
      </ScrollView>
    </View>
  );
};

export default SavedScreen;
