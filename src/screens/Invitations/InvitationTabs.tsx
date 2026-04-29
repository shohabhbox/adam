import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const tabs = ['Trips', 'Friends'];

const InvitationTabs = ({ active, onChange }: any) => {
  return (
    <View style={styles.tabs}>
      {tabs.map((t) => (
        <TouchableOpacity
          key={t}
          style={[
            styles.tab,
            active === t && styles.activeTab,
          ]}
          onPress={() => onChange(t)}
        >
          <Text
            style={[
              styles.tabText,
              active === t && styles.activeText,
            ]}
          >
            {t === 'Trips' ? '4 Trips invitations' : '4 Friends invitations'}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default InvitationTabs;

