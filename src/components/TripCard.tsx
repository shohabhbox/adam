import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Icon, Icons } from '@/components';
import { COLORS, FONTFAMILY } from '@/constant/config';
import { useNavigation } from '@react-navigation/native';

const TripCard = ({ title, role }: any) => {
  let url =
    'https://img.freepik.com/free-photo/beautiful-water-villas-tropical-maldives-island-sunrise-time_1232-4484.jpg?semt=ais_hybrid&w=740&q=80';
  let image =
    'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D';

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('TripDetailScreen' as never);
      }}
      style={styles.card}
    >
      {/* IMAGE */}
      <Image source={{ uri: url }} style={styles.image} />

      {/* CONTENT */}
      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.roleTag}>
              <Text style={styles.roleText}>{role}</Text>
            </View>
          </View>
          <Icon type={Icons.Feather} name="chevron-right" color={COLORS.icon} />
        </View>

        <Text style={styles.location}>Rome · Amalfi · Florence</Text>

        <Text style={styles.date}>Jun 10 – Jun 24, 2025</Text>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.places}>14 places</Text>

          <View style={styles.users}>
            {[1, 2, 3].map((_, index) => (
              <Image source={{ uri: image }} style={styles.userCircle} />
            ))}
            <Text style={styles.count}>3</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 15,
    alignItems: 'center',
  },

  image: {
    width: 90,
    height: 120,
    borderRadius: 12,
  },

  content: {
    flex: 1,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
    fontSize: 15,
    fontWeight: '800', // Maps to ExtraBold
    lineHeight: 22.5,
    letterSpacing: -0.3,
    marginRight: 8,
    color: COLORS.textPrimary,
  },
  roleTag: {
    backgroundColor: '#E6F4F2',
    paddingHorizontal: 6,
    borderRadius: 6,
    marginLeft: 5,
  },

  roleText: {
    fontSize: 10,
    color: '#0EA5A8',
  },

  location: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.8,
    letterSpacing: 0,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  date: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 16.5,
    letterSpacing: 0,
    color: '#9CA3AF',
  },

  footer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 6,
    alignItems: 'center',
  },

  places: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 15,
    letterSpacing: 0,
    color: '#9CA3AF',
  },

  users: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  userCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#ccc',
    marginRight: -5,
  },

  count: {
    marginLeft: 5,
    fontSize: 12,
    color: COLORS.textSecondary,
  },
});
