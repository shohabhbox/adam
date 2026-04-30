import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { COLORS } from '@/constant';

const faqData = [
  {
    id: '1',
    question: 'How do I import a location?',
    answer:
      'Tap the + button, paste a Google Maps or Apple Maps link, and the app will auto-extract location details for you.',
  },
  {
    id: '2',
    question: 'Can I use the app offline?',
    answer: 'Yes, download maps and access trips without internet.',
  },
  {
    id: '3',
    question: 'How to create a trip?',
    answer: 'Go to Trips tab and tap Create Trip.',
  },
  {
    id: '4',
    question: 'What does AI suggestions do?',
    answer: 'It generates optimized itineraries for your trip.',
  },
  {
    id: '5',
    question: 'How do I delete my account?',
    answer: 'Go to Settings → Delete Account.',
  },
];

const HelpSupportScreen = () => {
  const navigation = useAppNavigation<'HelpSupport'>();
  const [active, setActive] = useState<string | null>('1');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

          <Text style={styles.title}>Help & Support</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <Icon type={Icons.Feather} name="search" size={16} />
          <TextInput
            placeholder="Search help articles..."
            style={styles.input}
          />
        </View>

        {/* FAQ */}
        <Text style={styles.section}>FAQ</Text>

        {faqData.map(item => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={active === item.id}
            onPress={() => setActive(active === item.id ? null : item.id)}
          />
        ))}
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.contactBtn}>
          <Text style={styles.contactText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelpSupportScreen;
const FAQItem = ({ item, isOpen, onPress }: any) => {
  return (
    <TouchableOpacity
      style={styles.faqCard}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.faqHeader}>
        <Text style={styles.question}>{item.question}</Text>

        <Icon
          type={Icons.Feather}
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={16}
        />
      </View>

      {isOpen && <Text style={styles.answer}>{item.answer}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  /* HEADER */
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
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

  /* SEARCH */
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    height: 44,
  },

  /* SECTION */
  section: {
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: 11,
    color: '#9CA3AF',
  },

  /* FAQ */
  faqCard: {
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#fff',
  },

  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  question: {
    fontWeight: '600',
    flex: 1,
    paddingRight: 10,
  },

  answer: {
    marginTop: 10,
    fontSize: 12,
    color: '#6B7280',
  },

  /* FOOTER */
  footer: {
    padding: 20,
  },

  contactBtn: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  contactText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});
