import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import TripHeader from './TripHeader';
import BalanceBar from './BalanceBar';
import SegmentTabs from './SegmentTabs';
import SharedPoolItem from './SharedPoolItem';
import ItineraryItem from './ItineraryItem';
import DayTabs from '@/components/DayTabs';
import Icon, { Icons } from '@/components/Icon';
import { COLORS, SCREENS } from '@/constant/config';
import { CustomButton } from '@/components';

const TripDetailScreen = ({ navigation }: { navigation: any }) => {
  const [tab, setTab] = useState<'pool' | 'itinerary'>('pool');
  const [activeDay, setActiveDay] = useState(1);

  function renderItem() {
    if (tab === 'pool') {
      return (
        <SharedPoolItem
          title="Acropolis of Athens"
          type="Attraction"
          likes={3}
          onAdd={() => console.log('Add to Day')}
          onDelete={() => console.log('Delete')}
        />
      );
    } else {
      return (
        <ItineraryItem
          title="Acropolis of Athens"
          time="Day 1 - Morning"
          type="Attraction"
        />
      );
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <TripHeader />

        {/* SMART BALANCE */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Smart Balance</Text>

          <BalanceBar title="Hotels" value={30} color="#0EA5A8" />
          <BalanceBar title="Restaurants" value={60} color="#8B5CF6" />
          <BalanceBar title="Activities" value={80} color="#10B981" />
        </View>

        {/* TABS */}
        <SegmentTabs active={tab} onChange={setTab} />

        {/* CONTENT */}
        <View style={styles.content}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {tab === 'pool' ? 'Shared Pool' : 'Itinerary'}
            </Text>

            {tab === 'pool' ? (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('TripPlaces' as never);
                }}
                style={styles.addShareBtn}
              >
                <Icon
                  type={Icons.Feather}
                  name="plus"
                  size={16}
                  color={COLORS.white}
                  onPress={() => {
                    navigation.navigate('TripPlaces' as never);
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.pool}
                onPress={() => {
                  navigation.navigate('ReorderScreen' as never);
                }}
              >
                <Text style={styles.poolText}>Reorder</Text>
              </TouchableOpacity>
            )}
          </View>

          {tab === 'pool' && (
            <Text style={styles.meta}>3 collaborators · 4 places</Text>
          )}

          {tab === 'itinerary' && (
            <DayTabs days={5} activeDay={activeDay} onChange={setActiveDay} />
          )}

          <FlatList
            data={[1, 2, 3, 4]}
            keyExtractor={item => item.toString()}
            renderItem={renderItem}
            style={{ marginBottom: 20 }}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton
          title="View Map"
          onPress={() => console.log('View Map')}
          containerStyle={{ width: '45%' }}
        />
        <CustomButton
          title="AI Suggestions"
          onPress={() => navigation.navigate(SCREENS.AISuggestions as never)}
          containerStyle={{ width: '45%' }}
        />
      </View>
    </View>
  );
};

export default TripDetailScreen;
