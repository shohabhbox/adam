import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../styles';
import { Icon, Icons } from '@/components';
import { IMAGES } from '@/constant/config';

interface Props {
  title: string;
  time: string;
  type: 'Attraction' | 'Nature' | 'Scenic' | 'Food';
  image?: any;
}

const ItineraryItem: React.FC<Props> = ({ title, time, type, image }) => {
  const getTagColors = () => {
    switch (type) {
      case 'Attraction':
        return { bg: '#E6F4F2', text: '#0EA5A8' };
      case 'Nature':
        return { bg: '#E8F8F1', text: '#10B981' };
      case 'Scenic':
        return { bg: '#F3ECFF', text: '#8B5CF6' };
      case 'Food':
        return { bg: '#FFF4E5', text: '#F59E0B' };
      default:
        return { bg: '#E6F4F2', text: '#0EA5A8' };
    }
  };

  const colors = getTagColors();

  return (
    <View style={styles.itineraryRow}>
      {/* LEFT TIMELINE */}
      <View style={styles.timeline}>
        <View style={styles.dot} />
        <View style={styles.line} />
      </View>

      {/* CARD */}
      <View style={styles.itineraryCard}>
        {/* IMAGE */}
        <Image
          source={image || IMAGES.locationSample}
          style={styles.itineraryImage}
        />

        {/* CONTENT */}
        <View style={{ flex: 1 }}>
          <Text style={styles.itineraryTitle}>{title}</Text>

          {/* TIME + TAG */}
          <View style={styles.itineraryMeta}>
            <View style={styles.timeRow}>
              <Icon type={Icons.Feather} name="clock" size={12} />
              <Text style={styles.timeText}>{time}</Text>
            </View>

            <View style={[styles.tag, { backgroundColor: colors.bg }]}>
              <Text style={[styles.tagText, { color: colors.text }]}>
                {type}
              </Text>
            </View>
          </View>
        </View>

        {/* MENU */}
        <TouchableOpacity>
          <Icon type={Icons.Feather} name="more-vertical" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItineraryItem;
