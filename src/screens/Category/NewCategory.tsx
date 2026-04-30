import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';

import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';

import { StyleSheet } from 'react-native';
import { COLORS } from '@/constant';

const initialLocations = [
  {
    id: '1',
    name: 'Eiffel Tower',
    location: 'Champ de Mars, Paris',
    tag: 'Landmark',
    added: true,
    image: 'https://picsum.photos/200',
  },
  {
    id: '2',
    name: 'Café de Flore',
    location: 'Saint-Germain-des-Prés, Paris',
    tag: 'Café',
    added: true,
    image: 'https://picsum.photos/201',
  },
  {
    id: '3',
    name: 'Shibuya Crossing',
    location: 'Shibuya, Tokyo',
    tag: 'Urban',
    added: false,
    image: 'https://picsum.photos/202',
  },
  {
    id: '4',
    name: 'Oia Sunset Point',
    location: 'Oia Village, Santorini',
    tag: 'Nature',
    added: false,
    image: 'https://picsum.photos/203',
  },
];

const NewCategoryScreen = () => {
  const navigation = useAppNavigation<'NewCategory'>();

  const [name, setName] = useState('Rome Weekly');
  const [locations, setLocations] = useState(initialLocations);

  const toggleLocation = (id: string) => {
    setLocations(prev =>
      prev.map(item =>
        item.id === id ? { ...item, added: !item.added } : item,
      ),
    );
  };

  const selectedCount = locations.filter(l => l.added).length;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon
            type={Icons.Ionicons}
            name="arrow-back"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>

        <Text style={styles.title}>New Category</Text>

        <View style={{ width: 40 }} />
      </View>

      <Text style={styles.subtitle}>create your own</Text>

      {/* NAME */}
      <Text style={styles.label}>NAME</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />

      {/* LOCATIONS */}
      <Text style={styles.section}>ADD LOCATIONS FROM SAVE</Text>

      <FlatList
        data={locations}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        renderItem={({ item }) => (
          <LocationSelectItem
            item={item}
            onToggle={() => toggleLocation(item.id)}
          />
        )}
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.primaryBtn, !name && styles.disabled]}
          disabled={!name}
          onPress={()=>{
            navigation.goBack()
          }}
        >
          <Text style={styles.primaryText}>Save Category</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.deleteText}>Delete this Category</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewCategoryScreen;

const getTagColor = (tag: string) => {
  switch (tag) {
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

const LocationSelectItem = ({ item, onToggle }: any) => {
  const color = getTagColor(item.tag);

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.meta}>{item.location}</Text>

        <View style={[styles.tag, { backgroundColor: color + '20' }]}>
          <Text style={[styles.tagText, { color }]}>{item.tag}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.actionBtn, item.added ? styles.addedBtn : styles.addBtn]}
        onPress={onToggle}
      >
        <Text style={[styles.actionText, item.added && styles.addedText]}>
          {item.added ? 'Added' : 'Add'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  header: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  subtitle: {
    marginHorizontal: 20,
    color: '#9CA3AF',
    marginTop: 6,
  },

  label: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 11,
    color: '#9CA3AF',
  },

  input: {
    marginHorizontal: 20,
    marginTop: 6,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
  },

  section: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 11,
    color: '#9CA3AF',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 12,
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#fff',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 10,
  },

  name: {
    fontWeight: '600',
  },

  meta: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 6,
    alignSelf: 'flex-start',
  },

  tagText: {
    fontSize: 11,
  },

  actionBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
  },

  addBtn: {
    backgroundColor: '#E5E7EB',
  },

  addedBtn: {
    backgroundColor: COLORS.primary,
  },

  actionText: {
    fontSize: 12,
    color: '#374151',
  },

  addedText: {
    color: '#fff',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  disabled: {
    opacity: 0.5,
  },

  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },

  deleteText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#9CA3AF',
  },
});
