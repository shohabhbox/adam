import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTFAMILY } from '@/constant';
import Icon, { Icons } from './Icon';

interface Props {
  title: string;
  onBackPress?: () => void;
}

const CustomHeader: React.FC<Props> = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress}>
          <Icon type={Icons.MaterialIcons} name="arrow-back" />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.md,
  },
  title: {
    fontSize: SIZES.h18,
    fontFamily: FONTFAMILY.Bold,
    color: COLORS.textPrimary,
    marginLeft: 10,
  },
});
