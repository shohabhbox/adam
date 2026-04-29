import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

const SegmentTabs = ({ active, onChange }: any) => {
  return (
    <View style={styles.tabContainer}>
      {['pool', 'itinerary'].map(tab => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, active === tab && styles.tabActive]}
          onPress={() => onChange(tab)}
        >
          <Text style={active === tab ? styles.tabActiveText : styles.tabText}>
            {tab === 'pool' ? 'Shared Pool' : 'Itinerary'}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SegmentTabs;