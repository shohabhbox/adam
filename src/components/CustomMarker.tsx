import { COLORS, IMAGES } from '@/constant';
import { Image, StyleSheet, Text, View } from 'react-native';

const CustomMarker = ({ item }: any) => {
  const isHotel = item.type === 'hotel';

  return (
    <View style={{ alignItems: 'center' }}>
      {/* IMAGE PIN */}
      <Image
        source={IMAGES.marker}
        style={styles.markerImage}
        resizeMode="contain"
      />

      {/* LABEL */}
      <View
        style={[
          styles.markerLabel,
          { backgroundColor: isHotel ? '#0EA5A8' : '#F59E0B' },
        ]}
      >
        <Text style={styles.markerText}>{item.title}</Text>
      </View>
    </View>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  markerImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },

  markerLabel: {
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  markerText: {
    color: '#fff',
    fontSize: 12,
  },
});
