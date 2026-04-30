import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from '../Invites/styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import RemovedItem from './RemovedItem';

const data = [
  { id: '1', name: 'John Baker', date: 'Removed Mar 10, 2025' },
  { id: '2', name: 'Kim Sato', date: 'Removed Jan 4, 2025' },
  { id: '3', name: 'Daniel Garcia', date: 'Removed Nov 22, 2024' },
];

const RemovedScreen = () => {
  const navigation = useAppNavigation<'Removed'>();

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

        <Text style={styles.title}>Removed</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* INFO BOX */}
      <View style={styles.infoBox}>
        <Icon type={Icons.Feather} name="user-x" size={14} />
        <Text style={styles.infoText}>
          These contacts have been removed from your friends list.
        </Text>
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => <RemovedItem item={item} />}
      />
    </View>
  );
};

export default RemovedScreen;
