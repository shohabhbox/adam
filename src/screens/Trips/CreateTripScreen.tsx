import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';

import { COLORS, SCREENS } from '@/constant';
import { Icon, Icons, CustomTextInput, CustomButton } from '@/components';
import DescriptionInput from '@/components/DescriptionInput';
import BuildingItineraryModal from '@/components/modal/BuildingItineraryModal';

const CreateTripScreen = ({ navigation }: { navigation: any }) => {
  const [collaboration, setCollaboration] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon type={Icons.Ionicons} name="arrow-back" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Create Trip</Text>

          <View style={{ width: 40 }} />
        </View>

        <Text style={styles.title}>Trip Details</Text>

        {/* TRIP NAME */}
        <CustomTextInput
          label="Trip Name"
          placeholder="Greece Island Hop"
          leftIcon="tag"
        />

        {/* DESTINATION */}
        <CustomTextInput
          label="Destination"
          placeholder="Santorini, Greece"
          leftIcon="map-pin"
        />

        {/* DATES */}
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 8 }}>
            <CustomTextInput
              label="Start Date"
              placeholder="May 18, 2026"
              leftIcon="calendar"
            />
          </View>

          <View style={{ flex: 1, marginLeft: 8 }}>
            <CustomTextInput
              label="End Date"
              placeholder="Jun 2, 2026"
              leftIcon="calendar"
            />
          </View>
        </View>

        {/* DESCRIPTION */}
        <DescriptionInput
          label="Description (Optional)"
          placeholder="Add notes or a description..."
        />
        {/* DURATION */}
        <View style={styles.durationBox}>
          <Text style={styles.durationText}>Duration</Text>
          <Text style={styles.durationValue}>15 nights</Text>
        </View>

        {/* COLLAB */}
        <View style={styles.switchRow}>
          <Text style={styles.switchText}>Enable Collaboration</Text>
          <Switch
            value={collaboration}
            onValueChange={setCollaboration}
            trackColor={{ true: COLORS.primary }}
          />
        </View>
      </ScrollView>

      {/* BUTTON */}
      <View style={styles.bottom}>
        <CustomButton
          title="Create Trip"
          onPress={() => {
            setVisible(true);

            setTimeout(() => {
              setVisible(false);
            }, 2000);

            setTimeout(() => {
              navigation.navigate(SCREENS.TripDetailScreen);
            }, 3000);
          }}
        />
      </View>

      <BuildingItineraryModal
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </View>
  );
};

export default CreateTripScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontWeight: '600',
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
  },

  durationBox: {
    marginTop: 15,
    backgroundColor: '#E6F4F2',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  durationText: {
    color: '#555',
  },

  durationValue: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  switchRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  switchText: {
    fontSize: 14,
  },

  bottom: {
    marginBottom: 20,
  },
});
