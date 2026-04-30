import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { SCREENS } from '@/constant';

const TimelineItem = ({ item, isLast }: any) => {
  const navigation = useAppNavigation<'TravelTimeline'>();
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => {
        navigation.navigate(SCREENS.ArchivedTripScreen);
      }}
      style={styles.row}
    >
      {/* LEFT TIMELINE */}
      <View style={styles.timeline}>
        <View style={styles.circle}>
          <Text style={styles.flag}>{item.flag}</Text>
        </View>

        {!isLast && <View style={styles.line} />}
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{item.title}</Text>

          <View style={styles.doneBadge}>
            <Text style={styles.doneText}>Done</Text>
          </View>
        </View>

        <Text style={styles.date}>{item.date}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Icon type={Icons.Feather} name="map-pin" size={14} />
            <Text style={styles.metaText}>{item.places}</Text>
          </View>

          <Text style={styles.metaText}>{item.nights}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TimelineItem;
