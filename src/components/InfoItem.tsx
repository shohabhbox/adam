import React from 'react';
import { View, Text } from 'react-native';
interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ color: '#8B8CA7', fontSize: 12 }}>{label}</Text>
      <Text style={{ marginTop: 5, fontWeight: 'bold' }}>{value}</Text>
    </View>
  );
};

export default InfoItem;
