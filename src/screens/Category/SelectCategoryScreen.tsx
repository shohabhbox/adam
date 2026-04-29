import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { Icon, Icons, CustomButton } from '@/components';
import styles from './styles';

const data = [
  { id: 1, title: 'Europe', sub: '24 locations saved', emoji: '🌍' },
  { id: 2, title: 'Japan', sub: '12 locations saved', emoji: '🇯🇵' },
  { id: 3, title: 'Paris', sub: '7 locations saved', emoji: '🇫🇷' },
  { id: 4, title: 'Greece 2026', sub: '9 locations saved', emoji: '🇬🇷' },
  { id: 5, title: 'Spain', sub: '5 locations saved', emoji: '🇪🇸' },
];

const SelectCategoryScreen = ({ navigation }: { navigation: any }) => {
  const [selected, setSelected] = useState(2);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon
            type={Icons.Ionicons}
            name="arrow-back"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.subTitle}>Colosseum, Rome</Text>
          <Text style={styles.title}>Select Category</Text>
        </View>
      </View>

      <Text style={styles.desc}>
        Choose the best category or create your own
      </Text>

      {/* LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map(item => {
          const isActive = selected === item.id;

          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.card, isActive && styles.activeCard]}
              onPress={() => setSelected(item.id)}
            >
              {/* LEFT */}
              <View style={styles.left}>
                <Text style={styles.emoji}>{item.emoji}</Text>

                <View>
                  <Text style={styles.name}>{item.title}</Text>
                  <Text style={styles.sub}>{item.sub}</Text>
                </View>
              </View>

              {/* RIGHT RADIO */}
              <View style={[styles.radio, isActive && styles.radioActive]}>
                {isActive && <View style={styles.dot} />}
              </View>
            </TouchableOpacity>
          );
        })}

        {/* NEW CATEGORY */}
        <TouchableOpacity style={styles.newCategory}>
          <Text style={styles.newText}>+ New Category</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* BOTTOM */}
      <View style={styles.bottom}>
        <CustomButton title="Save Location" onPress={() => {}} />
        <Text style={styles.delete}>Delete this location</Text>
      </View>
    </View>
  );
};

export default SelectCategoryScreen;
