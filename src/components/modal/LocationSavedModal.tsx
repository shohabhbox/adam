import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Icons } from '@/components';
import { COLORS } from '@/constant';

const LocationSavedModal = ({ visible, onClose }: any) => {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        {/* SUCCESS ICON */}
        <View style={styles.iconWrap}>
          <View style={styles.iconOuter}>
            <View style={styles.iconInner}>
              <Icon type={Icons.Feather} name="check" size={26} color="#fff" />
            </View>
          </View>
        </View>

        {/* TITLE */}
        <Text style={styles.title}>Location Saved!</Text>

        {/* SUBTITLE */}
        <Text style={styles.desc}>
          Colosseum has been pinned to your map and added to your Italy trip
          itinerary.
        </Text>

        {/* DETAILS */}
        <View style={styles.card}>
          <InfoRow label="Location" value="Colosseum, Rome" />
          <InfoRow label="Category" value="Culture & History" />
          <InfoRow label="Trip" value="Italy Spring Escape" />
          <InfoRow label="Added on" value="Mar 25, 2026" />
        </View>

        {/* MAP INFO */}
        <View style={styles.mapBox}>
          <View style={styles.mapIcon}>
            <Icon type={Icons.Feather} name="map-pin" />
          </View>

          <View>
            <Text style={styles.mapTitle}>Visible on your map</Text>
            <Text style={styles.mapSub}>
              Tap the pin to view in full detail
            </Text>
          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.primaryBtn} onPress={onClose}>
          <Icon type={Icons.Feather} name="map" color="#fff" size={16} />
          <Text style={styles.primaryText}>View on Map</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default LocationSavedModal;
const InfoRow = ({ label, value }: any) => (
  <View style={styles.row}>
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={styles.rowValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 20,
  },

  /* ICON */
  iconWrap: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.primary + 20,
    padding: 10,
    borderRadius: 100,
  },

  iconOuter: {
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: COLORS.primary + 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconInner: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* TEXT */
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },

  desc: {
    textAlign: 'center',
    color: '#8B8CA7',
    marginBottom: 20,
  },

  /* CARD */
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#F3F4F6',
  },

  rowLabel: {
    color: '#9CA3AF',
  },

  rowValue: {
    fontWeight: '600',
  },

  /* MAP BOX */
  mapBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F7F7',
    padding: 14,
    borderRadius: 14,
    width: '100%',
    marginBottom: 30,
  },

  mapIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#CFF3F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  mapTitle: {
    fontWeight: '600',
  },

  mapSub: {
    fontSize: 12,
    color: '#6B7280',
  },

  /* BUTTON */
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 14,
    width: '100%',
    justifyContent: 'center',
  },

  primaryText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
  },
});
