import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CategoryCard = ({ title, count }: any) => {
  let url =
    'https://img.freepik.com/free-photo/beautiful-water-villas-tropical-maldives-island-sunrise-time_1232-4484.jpg?semt=ais_hybrid&w=740&q=80';
  return (
    <View style={styles.card}>
      <Image source={{ uri: url }} style={styles.image} />

      <View style={styles.overlay}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 10,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },

  count: {
    color: '#fff',
    fontSize: 12,
  },

  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
