import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { Icon, Icons } from '@/components';
import { COLORS, IMAGES, SCREENS } from '@/constant';

const ImportLocationDetailScreen = () => {
  const navigation = useAppNavigation<'LocationDetail'>();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO IMAGE */}
        <View>
          <Image source={IMAGES.locationSample} style={styles.image} />

          {/* BACK */}
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon type={Icons.Ionicons} name="arrow-back" color="#fff" />
          </TouchableOpacity>

          {/* SHARE */}
          <TouchableOpacity style={styles.shareBtn}>
            <Icon type={Icons.Feather} name="share-2" color="#fff" />
          </TouchableOpacity>

          {/* TITLE OVERLAY */}
          <View style={styles.overlay}>
            <Text style={styles.title}>Colosseum</Text>

            <View style={styles.locationRow}>
              <Icon
                type={Icons.Feather}
                name="map-pin"
                color="#fff"
                size={14}
              />
              <Text style={styles.location}>
                Piazza del Colosseo · Rome, Italy
              </Text>
            </View>
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          {/* AI TIP */}
          <View style={styles.tipBox}>
            <Image source={IMAGES.stars} style={{ height: 20, width: 20 }} />

            <Text style={styles.tipText}>
              <Text style={styles.tipBold}>AI tip:</Text> Best visited early
              morning (8–10 AM). Book skip-the-line tickets 3+ days ahead.
            </Text>
          </View>

          {/* DESCRIPTION */}
          <Text style={styles.desc}>
            An iconic oval amphitheatre in the centre of Rome, constructed
            between AD 72–80 under Emperor Vespasian. One of the world’s most
            recognisable heritage landmarks.
          </Text>

          {/* TAGS */}
          <View style={styles.tags}>
            <TagChip label="Landmark" />
            <TagChip label="Historic Site" />
            <TagChip label="3.2 km away" />
            <TagChip label="Open Now" />
          </View>

          {/* STATS */}
          <View style={styles.statsRow}>
            <InfoStat title="Latitude" value="41.8902° N" />
            <InfoStat title="Longitude" value="12.4922° E" />
            <InfoStat title="Altitude" value="18 m" />
          </View>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => {
              navigation.navigate(SCREENS.SelectCategoryScreen);
            }}
          >
            <Text style={styles.primaryText}>Categorize</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => {
              navigation.navigate(SCREENS.AddToTripScreen);
            }}
          >
            <Text style={styles.primaryText}>Add to Trip</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => {
            navigation.navigate('MainTabs');
          }}
        >
          <Text style={styles.secondaryText}>Save to Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImportLocationDetailScreen;

const TagChip = ({ label }: any) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{label}</Text>
  </View>
);

const InfoStat = ({ title, value }: any) => (
  <View style={styles.statBox}>
    <Text style={styles.statTitle}>{title}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  image: {
    width: '100%',
    height: 260,
  },

  backBtn: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 10,
  },

  shareBtn: {
    position: 'absolute',
    top: 20,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 10,
  },

  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  location: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 12,
  },

  content: {
    padding: 20,
  },

  tipBox: {
    flexDirection: 'row',
    backgroundColor: '#E6F7F7',
    padding: 12,
    borderRadius: 12,
    marginBottom: 14,
  },

  tipText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 12,
  },

  tipBold: {
    fontWeight: '600',
  },

  desc: {
    color: '#6B7280',
    marginBottom: 14,
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },

  tag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  tagText: {
    fontSize: 11,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },

  statTitle: {
    fontSize: 11,
    color: '#9CA3AF',
  },

  statValue: {
    fontWeight: '600',
    marginTop: 4,
  },

  footer: {
    padding: 20,
    backgroundColor: '#fff',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  primaryBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  secondaryText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});
