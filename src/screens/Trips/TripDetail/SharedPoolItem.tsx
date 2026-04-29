import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { IMAGES } from '@/constant/config';

interface Props {
  title: string;
  type: 'Attraction' | 'Nature' | 'Scenic' | 'Food';
  likes: number;
  image?: any;
  onAdd?: () => void;
  onDelete?: () => void;
}

const SharedPoolItem: React.FC<Props> = ({
  title,
  type,
  likes,
  image,
  onAdd,
  onDelete,
}) => {
  const getTagStyle = () => {
    switch (type) {
      case 'Attraction':
        return '#0EA5A8';
      case 'Nature':
        return '#10B981';
      case 'Scenic':
        return '#8B5CF6';
      case 'Food':
        return '#F59E0B';
      default:
        return '#0EA5A8';
    }
  };

  return (
    <View style={styles.sharedCard}>
      {/* IMAGE */}
      <Image
        source={image || IMAGES.locationSample}
        style={styles.sharedImage}
      />

      {/* CONTENT */}
      <View style={{ flex: 1, padding: 8 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.placeTitle}>{title}</Text>

          <View style={styles.likes}>
            <Icon type={Icons.Feather} name="thumbs-up" size={14} />
            <Text style={styles.likesText}> {likes}</Text>
          </View>
        </View>

        {/* TAG */}
        <View
          style={[
            styles.tag,
            { backgroundColor: getTagStyle() + '33' }, // 20% opacity
          ]}
        >
          <Text style={[styles.tagText, { color: getTagStyle() }]}>{type}</Text>
        </View>

        {/* ACTIONS */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={onAdd}
            activeOpacity={0.8}
          >
            <Text style={styles.addText}>Add to Day</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={onDelete}
            activeOpacity={0.8}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* LIKES */}
    </View>
  );
};

export default SharedPoolItem;
