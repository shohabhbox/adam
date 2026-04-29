import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import SuggestionCard from './SuggestionCard';
import { IMAGES } from '@/constant';

const data = [
  {
    id: '1',
    title: 'Acropolis Museum',
    desc: 'World-class exhibits of ancient Greek artefacts.',
    type: 'Attraction',
    image: 'https://picsum.photos/400',
  },
  {
    id: '2',
    title: 'Oia Castle Viewpoint',
    desc: 'Iconic sunset spot with panoramic views.',
    type: 'Nature',
    image: 'https://picsum.photos/401',
  },
  {
    id: '3',
    title: 'Little Venice, Mykonos',
    desc: 'Waterfront neighbourhood with colourful balconies.',
    type: 'Scenic',
    image: 'https://picsum.photos/402',
  },
  {
    id: '4',
    title: "Taverna Kiki's",
    desc: 'Legendary grill serving slow-roasted lamb.',
    type: 'Food',
    image: 'https://picsum.photos/403',
    match: '91%',
  },
];

const AISuggestionsScreen = () => {
  const navigation = useAppNavigation<'AISuggestions'>();

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

        <Text style={styles.title}>AI Suggestions</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* AI BANNER */}
      <View style={styles.banner}>
        <Image source={IMAGES.stars} style={{ height: 20, width: 20 }} />
        {/* <Icon type={Icons.Feather} name="sparkles" size={18} /> */}
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.bannerTitle}>Personalised for your trip</Text>
          <Text style={styles.bannerSub}>
            Based on Greece Island Hop · May 18 – Jun 2
          </Text>
        </View>

        <View style={styles.aiBadge}>
          <Text style={styles.aiText}>AI</Text>
        </View>
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => <SuggestionCard item={item} />}
      />
    </View>
  );
};

export default AISuggestionsScreen;
