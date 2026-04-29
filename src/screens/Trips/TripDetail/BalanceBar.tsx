import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const BalanceBar = ({ title, value, color }: any) => {
  return (
    <View style={styles.balanceRow}>
      <View style={styles.balanceHeader}>
        <Text>{title}</Text>
        <Text>{value}%</Text>
      </View>

      <View style={styles.balanceTrack}>
        <View style={[styles.balanceFill, { width: `${value}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
};

export default BalanceBar;