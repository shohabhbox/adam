import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';

export interface CategoryCardProps {
  id?: string;
  title: string;
  count: number;
  imageUrl?: string;
  style?: ViewStyle;
}

const CategoryCard = ({
  title = 'Location',
  count = 0,
  imageUrl = 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400',
  style,
}: CategoryCardProps) => {
  return (
    <View style={[styles.card, style]}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode='cover' />

      {/* Semi-transparent gradient-like overlay for text readability */}
      <View style={styles.overlayContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.countText}>{count} Places</Text>
          <Text style={styles.titleText} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>

      <View style={styles.countView}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 170,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // Subtle darkening
    justifyContent: 'flex-end',
  },
  textWrapper: {
    padding: 15,
  },

  titleText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  countView: {
    position: 'absolute',
    top: 15, // Slightly more padding from the edge
    right: 15,
    height: 38, // Slightly larger to match the circular proportion
    width: 38,
    backgroundColor: 'rgba(255, 255, 255, 0.25)', // Lighter, more transparent base
    borderRadius: 19, // Perfect circle
    alignItems: 'center',
    justifyContent: 'center',

    // The "Glass" Border
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.4)', // Light border creates the glass edge

    // Optional: Add a very subtle shadow to lift the glass off the image
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  countText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    // Text shadow helps readability if the background is very light
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
