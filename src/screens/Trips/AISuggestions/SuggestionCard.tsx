import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import AddedToPoolModal from '@/components/modal/AddedToPoolModal';

const getColor = (type: string) => {
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

const SuggestionCard = ({ item }: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.card}>
      {/* IMAGE */}
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />

        {/* TAG */}
        <View style={[styles.tag, { backgroundColor: getColor(item.type) }]}>
          <Text style={styles.tagText}>{item.type}</Text>
        </View>

        {/* MATCH */}
        {item.match && (
          <View style={styles.match}>
            <Text style={styles.matchText}>⭐ {item.match} match</Text>
          </View>
        )}
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>

        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryText}>+ Add to Day</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn} onPress={() => setModalVisible(true)}>
            <Text style={styles.secondaryText}>Add to Pool</Text>
          </TouchableOpacity>
        </View>
      </View>

      <AddedToPoolModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

export default SuggestionCard;
