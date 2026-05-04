import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'; // Ensure this is installed
import { IMAGES, SCREENS } from '@/constant';

const { width, height } = Dimensions.get('window');

const ONBOARDING_DATA = [
  {
    id: '1',
    title: 'Save Places You Love',
    description: 'Drop a pin on any spot catches your eye.',
    tag: 'DISCOVER',
    image: IMAGES.onboard1,
  },
  {
    id: '2',
    title: 'Explore Local Culture',
    description: 'Immerse yourself in ancient beauty.',
    tag: 'EXPLORE',
    image: IMAGES.onboard2,
  },
  {
    id: '3',
    title: 'Share Your Journey',
    description: 'Connect and share your favorite spots.',
    tag: 'COMMUNITY',
    image: IMAGES.onboard3,
  },
];

const OnboardingItem = ({
  item,
  index,
  scrollX,
  flatListRef, // Add this prop
  navigation, // Add this prop if using navigation
}: {
  item: any;
  index: number;
  scrollX: any;
  flatListRef: any;
  navigation: any;
}) => {
  const handlePress = () => {
    const isLastSlide = index === ONBOARDING_DATA.length - 1;

    if (isLastSlide) {
      navigation.navigate(SCREENS.Login);
    } else {
      // Scroll to the next slide
      flatListRef.current?.scrollToIndex({
        index: index + 1,
        animated: true,
      });
    }
  };

  const backgroundStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    return { opacity };
  });

  return (
    <View style={styles.screenContainer}>
      <Animated.Image
        source={item.image}
        style={[StyleSheet.absoluteFill, backgroundStyle]}
        resizeMode="cover"
      />

      {/* FIXED: Wrap in SafeAreaView with 'flex-end' to push to bottom */}
      <View style={styles.safeArea}>
        <View style={styles.glassCard}>
          <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0.25)',
              'rgba(255, 255, 255, 0.45)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.65)',
            ]}
            style={StyleSheet.absoluteFill}
          />

          <View style={styles.cardContent}>
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>{item.tag}</Text>
            </View>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>

            <View style={styles.pagination}>
              {ONBOARDING_DATA.map((_, i) => (
                <Dot key={i} index={i} scrollX={scrollX} />
              ))}
            </View>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={handlePress}
            >
              <Text style={styles.buttonText}>Continue →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const Dot = ({ index, scrollX }: any) => {
  const dotStyle = useAnimatedStyle(() => {
    const dotWidth = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [8, 24, 8],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP,
    );
    return { width: dotWidth, opacity };
  });
  return <Animated.View style={[styles.dot, dotStyle]} />;
};

const OnboardingSlider = ({ navigation }: any) => {
  const scrollX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });

  const flatListRef = React.useRef<Animated.FlatList<any>>(null); // Create the ref

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Animated.FlatList
        data={ONBOARDING_DATA}
        ref={flatListRef} // Attach the ref
        renderItem={({ item, index }) => (
          <OnboardingItem
            item={item}
            index={index}
            scrollX={scrollX}
            flatListRef={flatListRef}
            navigation={navigation}
          />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  screenContainer: {
    width,
    height,
  },
  safeArea: {
    flex: 1, // Take up full height
    justifyContent: 'flex-end', // Push content to the bottom
    paddingHorizontal: 20,
    paddingBottom: 20, // Space from the very bottom
  },
  glassCard: {
    borderRadius: 35,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    // Add these for better shadow on the glass
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  cardContent: {
    paddingTop: 30, // Space inside the card
    paddingHorizontal: 25,
    paddingBottom: 20,
    alignItems: 'center',
  },

  tagContainer: {
    borderWidth: 1,
    borderColor: '#FFB347',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 15,
  },
  tagText: {
    color: '#FFB347',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  description: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  pagination: { flexDirection: 'row', marginBottom: 25 },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#008B9B',
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: '#008B9B',
    width: '100%',
    height: 58,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
});

export default OnboardingSlider;
