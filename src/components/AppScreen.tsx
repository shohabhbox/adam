import { COLORS } from '@/constant';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppScreen = ({
  children,
  backgroundColor = COLORS.background,
}: any) => {
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <SafeAreaView
        edges={['top']}
        style={{ backgroundColor }}
      />

      <View style={{ flex: 1 }}>
        {children}
      </View>
    </View>
  );
};

export default AppScreen;