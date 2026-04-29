import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Modal from 'react-native-modal';
import { COLORS } from '@/constant';
import { CustomButton, Icon, Icons } from '@/components';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const categoriesData = [
  {
    id: 1,
    label: 'Restaurants',
    icon: 'restaurant-outline',
    type: Icons.Ionicons,
    color: '#F59E0B',
  },
  {
    id: 2,
    label: 'Hotels',
    icon: 'building-o',
    type: Icons.FontAwesome,
    color: '#9CA3AF',
  },
  {
    id: 3,
    label: 'Attractions',
    icon: 'camera',
    type: Icons.Feather,
    color: '#10B981',
  },
  {
    id: 4,
    label: 'Shopping',
    icon: 'bag-handle-outline',
    type: Icons.Ionicons,
    color: '#9CA3AF',
  },
];

const FilterModal: React.FC<Props> = ({ isVisible, onClose }) => {
  const [selected, setSelected] = useState<number[]>([1, 3]);

  const toggleCategory = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(i => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.container}>
        {/* HANDLE */}
        <View style={styles.handle} />

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Filters</Text>
            <Text style={styles.subtitle}>Refine your map results</Text>
          </View>

          <View style={styles.activeBadge}>
            <Text style={styles.activeText}>• {selected.length} active</Text>
          </View>
        </View>

        {/* CATEGORIES */}
        <Text style={styles.section}>CATEGORIES</Text>

        <View style={styles.categoryRow}>
          {categoriesData.map(item => {
            const isSelected = selected.includes(item.id);

            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.categoryItem,
                  isSelected && {
                    borderColor: item.color,
                    backgroundColor: `${item.color}15`,
                  },
                ]}
                onPress={() => toggleCategory(item.id)}
              >
                <Icon
                  type={item.type}
                  name={item.icon}
                  size={16}
                  color={item.color}
                />
                <Text style={styles.categoryText}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* DISTANCE */}
        <Text style={styles.section}>DISTANCE</Text>

        <View style={styles.distanceRow}>
          <Text style={styles.distanceText}>0 km</Text>
          <View style={styles.distanceBadge}>
            <Text style={{ color: COLORS.primary }}>5 km</Text>
          </View>
          <Text style={styles.distanceText}>25 km</Text>
        </View>

        {/* SLIDER (simple UI) */}
        <View style={styles.slider} />

        {/* BUTTONS */}
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.resetBtn}>
            <Text style={{ color: '#999' }}>Reset</Text>
          </TouchableOpacity>

          <CustomButton
            title="Apply Filters →"
            onPress={onClose}
            containerStyle={{ flex: 1 }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#ddd',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#8B8CA7',
    marginTop: 4,
  },

  activeBadge: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  activeText: {
    color: COLORS.primary,
    fontSize: 12,
  },

  section: {
    marginTop: 20,
    fontSize: 12,
    color: '#8B8CA7',
  },

  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },

  categoryText: {
    marginLeft: 6,
  },

  distanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  distanceText: {
    color: '#8B8CA7',
  },

  distanceBadge: {
    backgroundColor: '#EEF2F7',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
  },

  slider: {
    height: 4,
    backgroundColor: '#E5E7EB',
    marginTop: 10,
    borderRadius: 10,
  },

  bottomRow: {
    flexDirection: 'row',
    marginTop: 20,
  },

  resetBtn: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
