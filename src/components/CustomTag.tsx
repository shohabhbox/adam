import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Icons } from '@/components';
import { COLORS } from '@/constant';

interface Props {
  label: string;
  icon?: string;
}

const Tag: React.FC<Props> = ({ label, icon = 'tag' }) => {
  return (
    <View style={styles.tag}>
      <Icon
        type={Icons.Feather}
        name={icon}
        size={12}
        color="#8B8CA7"
      />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  text: {
    marginLeft: 5,
    fontSize: 12,
    color: '#4A4B5C',
  },
});