import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CategoryCard, { CategoryCardProps } from '@/components/CategoryCard'; // Adjust path as needed
import { CATEGORIES } from './SavedScreen';
import Icon, { Icons } from '@/components/Icon';
import AppScreen from '@/components/AppScreen';

// Added a wildcard to ensure an even grid if needed
const ALL_CATEGORIES: CategoryCardProps[] = [
  ...CATEGORIES,
  {
    id: '6',
    title: 'Adventure',
    count: 15,
    imageUrl:
      'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=400',
  },
];

const CategoriesAllScreen = ({ navigation }: any) => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon type={Icons.Ionicons} name="arrow-back" disabled={true} />
          </TouchableOpacity>

          <Text style={styles.title}>Import Locations</Text>

          <View style={{ width: 40 }} />
        </View>
        <FlatList
          data={ALL_CATEGORIES}
          keyExtractor={item => Number(item.id).toString()}
          numColumns={2} // Creates the 2-column vertical grid
          renderItem={({ item }) => (
            <CategoryCard
              title={item.title}
              count={item.count}
              imageUrl={item.imageUrl}
              style={styles.cardSpacing}
            />
          )}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listPadding}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </AppScreen>
  );
};

export default CategoriesAllScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  listPadding: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15, // Space between rows
  },
  cardSpacing: {
    width: '48%', // Ensures 2 columns with a small gap in between
    height: 180, // Slightly taller for a vertical grid look
  },
});
