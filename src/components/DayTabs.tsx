import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { COLORS } from '@/constant/config';

interface Props {
  days: number;
  activeDay: number;
  onChange: (day: number) => void;
}

const DayTabs: React.FC<Props> = ({ days, activeDay, onChange }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.dayTabsContainer}
    >
      {Array.from({ length: days }, (_, i) => {
        const day = i + 1;
        const isActive = day === activeDay;

        return (
          <TouchableOpacity
            key={day}
            style={[styles.dayTab, isActive && styles.dayTabActive]}
            onPress={() => onChange(day)}
            activeOpacity={0.8}
          >
            <Text
              style={isActive ? styles.dayTabTextActive : styles.dayTabText}
            >
              Day {day}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default DayTabs;

const styles = StyleSheet.create({
  /* ================= DAY TABS ================= */

  dayTabsContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  dayTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 10,
  },

  dayTabActive: {
    backgroundColor: COLORS.primary,
  },

  dayTabText: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },

  dayTabTextActive: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
  },
});
