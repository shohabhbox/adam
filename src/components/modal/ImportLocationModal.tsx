import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
  StyleSheet,
} from 'react-native';

import { Icon, Icons } from '@/components';
import { COLORS } from '@/constant';

const recentData = [
  {
    id: '1',
    name: 'Trevi Fountain',
    location: 'Rome, Italy',
    time: '2h ago',
  },
  {
    id: '2',
    name: 'Eiffel Tower',
    location: 'Paris, France',
    time: 'Yesterday',
  },
];

const ImportLocationModal = ({ visible, onClose, onImport }: any) => {
  const [value, setValue] = useState('');

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        {/* SHEET */}
        <View style={styles.container}>
          {/* HANDLE */}
          <View style={styles.handle} />

          {/* HEADER */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Import Location</Text>
              <Text style={styles.subtitle}>
                Paste any link, address or text
              </Text>
            </View>

            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Icon type={Icons.Feather} name="x" />
            </TouchableOpacity>
          </View>

          {/* INPUT */}
          <View style={styles.inputWrap}>
            <Icon type={Icons.Feather} name="link" size={16} />
            <TextInput
              placeholder="https://instagram.com/place/..."
              value={value}
              onChangeText={setValue}
              style={styles.input}
            />
          </View>

          {/* RECENT */}
          <View style={styles.recentHeader}>
            <Text style={styles.section}>RECENT IMPORTS</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={recentData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <RecentItem item={item} />}
          />

          {/* BUTTON */}
          <TouchableOpacity style={styles.primaryBtn} onPress={onImport} >
            <Text style={styles.primaryText}>Import Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImportLocationModal;

const RecentItem = ({ item }: any) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.flag}>
        <Text>🌍</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.sub}>{item.location}</Text>
      </View>

      <Text style={styles.time}>{item.time}</Text>

      <Icon type={Icons.Feather} name="chevron-right" size={16} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },

  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D5DB',
    alignSelf: 'center',
    borderRadius: 2,
    marginBottom: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
  },

  subtitle: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 20,
  },

  input: {
    flex: 1,
    height: 44,
    marginLeft: 8,
  },

  section: {
    fontSize: 11,
    color: '#9CA3AF',
  },

  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },

  seeAll: {
    color: COLORS.primary,
    fontSize: 12,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  flag: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  name: {
    fontWeight: '600',
  },

  sub: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  time: {
    fontSize: 11,
    color: '#9CA3AF',
    marginRight: 8,
  },

  primaryBtn: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },
});
