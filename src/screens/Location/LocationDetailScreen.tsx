import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import { IMAGES, SCREENS } from '@/constant';
import { Icon, Icons, CustomButton } from '@/components';
import styles from './styles';
import InfoItem from '@/components/InfoItem';
import Tag from '@/components/CustomTag';

const LocationDetailScreen = ({ navigation }: any) => {
  function handleCategorize() {
    navigation.navigate(SCREENS.SelectCategoryScreen);
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* IMAGE HEADER */}
        <View style={styles.imageContainer}>
          <Image source={IMAGES.locationSample} style={styles.image} />

          {/* BACK */}
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon type={Icons.Ionicons} name="arrow-back" color="#fff" />
          </TouchableOpacity>

          {/* TITLE */}
          <View style={styles.overlay}>
            <Text style={styles.title}>Colosseum</Text>

            <View style={styles.row}>
              <Icon
                type={Icons.Feather}
                name="map-pin"
                size={14}
                color="#fff"
              />
              <Text style={styles.location}>
                Piazza del Colosseo · Rome, Italy
              </Text>
            </View>
          </View>

          {/* RATING */}
          <View style={styles.ratingBox}>
            <Text style={styles.rating}>⭐ 4.8</Text>
            <Text style={styles.review}>21k reviews</Text>
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          {/* AI TIP */}
          <View style={styles.tipBox}>
            <Image source={IMAGES.stars} style={styles.tipIcon} />

            <Text style={styles.tipText}>
              AI tip: Best visited early morning (8–10 AM). Book skip-the-line
              tickets 3+ days ahead.
            </Text>
          </View>

          {/* DESCRIPTION */}
          <Text style={styles.description}>
            An iconic oval amphitheatre in the centre of Rome, constructed
            between AD 72–80 under Emperor Vespasian. One of the world's most
            recognisable heritage landmarks.
          </Text>

          {/* TAGS */}
          <View style={styles.tagRow}>
            <Tag label="Landmark" icon="tag" />
            <Tag label="Historic Site" icon="tag" />
            <Tag label="3.2 km away" icon="map-pin" />
            <Tag label="Open Now" icon="clock" />
          </View>

          {/* INFO BOX */}
          <View style={styles.infoBox}>
            <InfoItem label="Latitude" value="41.8902° N" />
            <InfoItem label="Longitude" value="12.4922° E" />
            <InfoItem label="Altitude" value="18 m" />
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM BUTTONS */}
      <View style={styles.bottomRow}>
        <CustomButton
          title="Categorize"
          onPress={handleCategorize}
          containerStyle={styles.btn}
        />

        <CustomButton
          title="Add to Trip"
          onPress={() => {
            navigation.navigate(SCREENS.AddToTripScreen);
          }}
          containerStyle={styles.btn}
        />
      </View>
    </View>
  );
};

export default LocationDetailScreen;
