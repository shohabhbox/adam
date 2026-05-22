import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import axios from 'axios';

import { Icon, Icons } from '@/components';
import { COLORS } from '@/constant';

const SUGGESTIONS_URL =
  'https://pilotiq.hboxdigital.com/api/v1/public/location-suggestions';

const recentData = [
  { id: '1', name: 'Trevi Fountain', location: 'Rome, Italy', time: '2h ago' },
  {
    id: '2',
    name: 'Eiffel Tower',
    location: 'Paris, France',
    time: 'Yesterday',
  },
];

const ImportLocationModal = ({ visible, onClose, onImport }: any) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImport = async () => {
    const trimmed = value.trim();

    if (!trimmed) {
      Alert.alert(
        'No URL',
        'Please paste a link, address, or place name first.',
      );
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        SUGGESTIONS_URL,
        { input: trimmed, prefer_async: true },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );

      if (!response.data?.success) {
        throw new Error(response.data?.message || 'Server returned an error.');
      }

      onImport(trimmed, response.data.data);
      onClose();
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Could not detect places from this input. Please try another link or place name.';
      Alert.alert('Location Error', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <View style={styles.handle} />

          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Import Location</Text>
              <Text style={styles.subtitle}>
                Paste any link, address or text
              </Text>
            </View>

            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Icon type={Icons.Feather} name="x" size={18} disabled={true} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrap}>
            <Icon type={Icons.Feather} name="link" size={16} />

            <TextInput
              placeholder="Instagram reel, YouTube short, Lucky One Mall..."
              value={value}
              onChangeText={setValue}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <TouchableOpacity
            style={[styles.primaryBtn, loading && styles.primaryBtnDisabled]}
            onPress={handleImport}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text style={styles.primaryText}>Find Similar Places</Text>
            )}
          </TouchableOpacity>

          <View style={styles.recentHeader}>
            <Text style={styles.section}>RECENT IMPORTS</Text>

            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* <FlatList
            data={recentData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <RecentItem item={item} />}
            scrollEnabled={false}
          /> */}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ImportLocationModal;

const RecentItem = ({ item }: any) => (
  <TouchableOpacity style={styles.item}>
    <View style={styles.flag}>
      <Text>🌍</Text>
    </View>

    <View style={{ flex: 1 }}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.sub}>{item.location}</Text>
    </View>

    <Text style={styles.time}>{item.time}</Text>
    <Icon type={Icons.Feather} name="chevron-right" size={16} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  container: {
    maxHeight: '88%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D5DB',
    alignSelf: 'center',
    borderRadius: 2,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    color: '#8B8CA7',
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 44,
    marginLeft: 8,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  section: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '700',
  },
  seeAll: {
    color: COLORS.primary,
    fontSize: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  flag: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  name: {
    fontWeight: '700',
    color: '#111827',
  },
  sub: {
    fontSize: 12,
    color: '#8B8CA7',
    marginTop: 2,
  },
  reason: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 4,
    lineHeight: 15,
  },
  time: {
    fontSize: 11,
    color: '#9CA3AF',
    marginRight: 8,
  },
  confidenceBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 999,
    marginLeft: 8,
  },
  confidenceText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.primary,
  },
  primaryBtn: {
    marginTop: 14,
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  primaryBtnDisabled: {
    opacity: 0.6,
  },
  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },
});

const OPENAI_API_KEY =
  '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';
