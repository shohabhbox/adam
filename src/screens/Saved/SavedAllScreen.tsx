import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import PlaceItem, { Place } from '@/components/PlaceItem';
import { useNavigation } from '@react-navigation/native';
import { Icon, Icons } from '@/components';
import { DATA } from './SavedScreen';
import AppScreen from '@/components/AppScreen';

const SavedAllScreen = () => {
  const navigation = useNavigation();
  const renderItem: ListRenderItem<Place> = ({ item }) => (
    <PlaceItem {...item} />
  );

  return (
    <AppScreen>
      <View style={styles.container}>
        {/* Custom Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon
              type={Icons.Feather}
              name="chevron-left"
              size={24}
              color="#1A1A1A"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>All Saved</Text>
          <View style={{ width: 40 }} />
        </View>

        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={renderItem}
        />
      </View>
    </AppScreen>
  );
};

export default SavedAllScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // Shadow for the button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  headerTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '47%', // Ensuring 2 columns with spacing
    height: 190,
  },
});
