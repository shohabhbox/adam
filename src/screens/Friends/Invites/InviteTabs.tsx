import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const InviteTabs = ({ active, onChange }: any) => {
  return (
    <View style={styles.tabs}>
      {['Trips', 'Friends'].map(tab => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            active === tab && styles.activeTab,
          ]}
          onPress={() => onChange(tab)}
        >
          <Text
            style={[
              styles.tabText,
              active === tab && styles.activeText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default InviteTabs;