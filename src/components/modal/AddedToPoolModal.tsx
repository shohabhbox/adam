import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { Icon, Icons } from '@/components';
import { COLORS } from '@/constant';

interface Props {
  visible: boolean;
  onClose: () => void;
  onViewPool?: () => void;
}

const AddedToPoolModal: React.FC<Props> = ({
  visible,
  onClose,
  onViewPool,
}) => {
  return (
    <Modal isVisible={visible} style={{ margin: 0 }}>
      <View style={styles.fullScreenContainer}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {/* SUCCESS ICON */}
          <View style={styles.successCircle}>
            <Icon
              type={Icons.Feather}
              name="check-circle"
              size={28}
              color={COLORS.primary}
            />
          </View>

          {/* TITLE */}
          <Text style={styles.title}>Added to Shared Pool</Text>

          {/* DESCRIPTION */}
          <Text style={styles.desc}>
            Oia Castle Viewpoint has been added to the shared pool for Greece
            Island Hop. Your co-planners can now vote and discuss.
          </Text>

          {/* CARD */}
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://picsum.photos/400' }}
              style={styles.image}
            />

            <View style={styles.overlay}>
              <Text style={styles.placeName}>Oia Castle Viewpoint</Text>
              <Text style={styles.location}>Oia, Santorini, Greece</Text>
            </View>

            {/* FOOTER */}
            <View style={styles.cardFooter}>
              <View style={styles.avatars}>
                {['A', 'K', 'M'].map((i, idx) => (
                  <View key={idx} style={styles.avatar}>
                    <Text style={styles.avatarText}>{i}</Text>
                  </View>
                ))}
                <Text style={styles.sharedText}>Shared with 3</Text>
              </View>

              <View style={styles.badge}>
                <Text style={styles.badgeText}>In Pool ✓</Text>
              </View>
            </View>
          </View>

          {/* INFO BOX */}
          <View style={styles.infoBox}>
            <Icon type={Icons.Feather} name="users" size={16} />
            <Text style={styles.infoText}>
              John and Michel have been notified
            </Text>
          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.primaryBtn} onPress={onClose}>
          <Text style={styles.primaryText}>Back to Trip</Text>
        </TouchableOpacity>

        {/* LINK */}
        <TouchableOpacity onPress={onViewPool}>
          <Text style={styles.link}>View Shared Pool</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AddedToPoolModal;

const styles = StyleSheet.create({
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 45,
    backgroundColor: '#E6F4F2',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 80,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingBottom: 40,
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },

  desc: {
    textAlign: 'center',
    color: '#8B8CA7',
    marginTop: 10,
    paddingHorizontal: 30,
    lineHeight: 20,
  },

  card: {
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: 140,
  },

  overlay: {
    position: 'absolute',
    bottom: 50,
    left: 10,
  },

  placeName: {
    color: '#fff',
    fontWeight: '600',
  },

  location: {
    color: '#E5E7EB',
    fontSize: 12,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  avatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -6,
  },

  avatarText: {
    color: '#fff',
    fontSize: 10,
  },

  sharedText: {
    marginLeft: 10,
    fontSize: 12,
  },

  badge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  badgeText: {
    fontSize: 11,
    color: '#059669',
  },

  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F4F2',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 12,
  },

  infoText: {
    marginLeft: 8,
    fontSize: 12,
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    margin: 20,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },

  link: {
    textAlign: 'center',
    color: '#9CA3AF',
  },
});
