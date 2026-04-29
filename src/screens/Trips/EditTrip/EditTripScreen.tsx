import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './styles';
import { Icon, Icons, CustomTextInput } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const EditTripScreen = () => {
  const navigation = useAppNavigation<'EditTrip'>();

  const [form, setForm] = useState({
    name: 'Greece Island Hop',
    destination: 'Santorini, Greece',
    startDate: 'May 18, 2026',
    endDate: 'Jun 2, 2026',
    description:
      'Island hopping through Greece — Santorini, Athens and Mykonos over 15 nights.',
  });

  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon type={Icons.Feather} name="x" />
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Edit Trip</Text>

          <View style={{ width: 60 }} />
        </View>

        {/* TITLE */}
        <Text style={styles.pageTitle}>Edit Trip Details</Text>

        {/* TRIP NAME */}
        <Text style={styles.label}>TRIP NAME</Text>
        <CustomTextInput
          value={form.name}
          onChangeText={(text) =>
            setForm({ ...form, name: text })
          }
          leftIcon="tag"
        />

        {/* DESTINATION */}
        <Text style={styles.label}>DESTINATION</Text>
        <CustomTextInput
          value={form.destination}
          onChangeText={(text) =>
            setForm({ ...form, destination: text })
          }
          leftIcon="map-pin"
        />

        {/* DATES */}
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>START DATE</Text>
            <CustomTextInput
              value={form.startDate}
              leftIcon="calendar"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>END DATE</Text>
            <CustomTextInput
              value={form.endDate}
              leftIcon="calendar"
            />
          </View>
        </View>

        {/* DESCRIPTION */}
        <Text style={styles.label}>DESCRIPTION</Text>
        <CustomTextInput
          value={form.description}
          isDescription
        />

        {/* AUTO DATA */}
        <View style={styles.row}>
          <View style={styles.smallBox}>
            <Text style={styles.smallLabel}>DURATION</Text>
            <Text style={styles.smallValue}>15 nights</Text>
          </View>

          <View style={styles.smallBox}>
            <Text style={styles.smallLabel}>NO. OF PLACES</Text>
            <Text style={styles.smallValue}>9 places</Text>
          </View>
        </View>

        {/* DELETE */}
        <View style={styles.deleteBox}>
          <Text style={styles.deleteLabel}>Delete this trip</Text>

          <TouchableOpacity style={styles.deleteSmallBtn}>
            <Text style={styles.deleteSmallText}>Delete</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Save Changes</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default EditTripScreen;