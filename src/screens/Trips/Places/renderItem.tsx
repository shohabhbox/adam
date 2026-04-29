import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const getTagColor = (type: string) => {
  switch (type) {
    case 'Landmark':
      return '#0EA5A8';
    case 'Café':
      return '#F59E0B';
    case 'Urban':
      return '#8B5CF6';
    case 'Nature':
      return '#10B981';
    default:
      return '#0EA5A8';
  }
};

const RenderItem = ({ item, onToggle }: any) => {
  const [status, setStatus] = React.useState(item.added);

  const handleToggle = () => {
    setStatus(!status);
    onToggle(item.id);
  };

  return (
    <View style={styles.card}>
      {/* IMAGE */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* CONTENT */}
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>

        <View
          style={[
            styles.tag,
            { backgroundColor: getTagColor(item.type) + '20' },
          ]}
        >
          <Text style={[styles.tagText, { color: getTagColor(item.type) }]}>
            {item.type}
          </Text>
        </View>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={[styles.addBtn, status && styles.addedBtn]}
        onPress={handleToggle}
      >
        <Text style={[styles.addText, status && styles.addedText]}>
          {status ? 'Added' : 'Add'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderItem;
