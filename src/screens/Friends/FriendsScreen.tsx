import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import FriendItem from './FriendItem';
import FilterTabs from './FilterTabs';
import { SCREENS } from '@/constant';

const initialData = [
  { id: '1', name: 'Sarah Johnson', trips: '3 trips together' },
  { id: '2', name: 'Marcus Lee', trips: '1 trip together' },
  { id: '3', name: 'Priya Nair', trips: '5 trips together' },
  { id: '4', name: 'Daniel Torres', trips: '2 trips together' },
  { id: '5', name: 'Yuki Tanaka', trips: 'Just connected' },
];

const FriendsScreen = () => {
  const navigation = useAppNavigation<'Friends'>();

  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = initialData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleAddFriend() {
    navigation.navigate('AddFriendScreen');
  }

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

        <Text style={styles.title}>Friends</Text>

        <TouchableOpacity style={styles.addBtn} onPress={handleAddFriend}>
          <Icon
            type={Icons.Feather}
            name="user-plus"
            color="#fff"
            size={18}
            onPress={handleAddFriend}
          />
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Icon type={Icons.Feather} name="search" size={18} />
        <TextInput
          placeholder="Search friends..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      {/* TABS */}
      <FilterTabs
        active={activeTab}
        onChange={tab => {
          if (tab === 'Pending') {
            navigation.navigate(SCREENS.PendingInvitesScreen);
            return;
          }
          if (tab === 'Removed') {
            navigation.navigate(SCREENS.RemovedScreen);
            return;
          }

          setActiveTab(tab);
        }}
      />
      {/* LIST */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => <FriendItem item={item} />}
      />
    </View>
  );
};

export default FriendsScreen;
