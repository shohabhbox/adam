import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';

const TripSelectCard = ({ item, selected, onPress }: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        selected && styles.cardActive,
      ]}
      onPress={onPress}
    >

      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.title}</Text>

        <Text style={styles.meta}>{item.date}</Text>
        <Text style={styles.meta}>{item.places}</Text>
      </View>

      {selected && (
        <View style={styles.check}>
          <Icon type={Icons.Feather} name="check" color="#fff" size={14} />
        </View>
      )}

    </TouchableOpacity>
  );
};

export default TripSelectCard;