import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Icon, Icons } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { COLORS } from '@/constant';

const features = [
  'Unlimited map downloads',
  'Offline navigation',
  'Priority processing',
  'AI travel suggestions',
  'Shared trip collaboration',
];

const UpgradePremiumScreen = () => {
  const navigation = useAppNavigation<'UpgradePremium'>();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon type={Icons.Ionicons} name="arrow-back" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Upgrade to Premium</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* ICON */}
        <View style={styles.iconWrap}>
          <Icon
            type={Icons.Feather}
            name="star"
            size={28}
            color={COLORS.primary}
          />
        </View>

        {/* TITLE */}
        <Text style={styles.title}>Go Premium</Text>

        <Text style={styles.subtitle}>
          Unlock the full travel experience with all features.
        </Text>

        {/* FEATURES */}
        <View style={styles.card}>
          {features.map((item, index) => (
            <View key={index} style={styles.featureRow}>
              <View style={styles.featureLeft}>
                <View style={styles.featureIcon}>
                  <Icon type={Icons.Feather} name="check" size={14} />
                </View>

                <Text style={styles.featureText}>{item}</Text>
              </View>

              <View style={styles.tick}>
                <Icon
                  type={Icons.Feather}
                  name="check"
                  size={14}
                  color="#fff"
                />
              </View>
            </View>
          ))}
        </View>

        {/* PLAN */}
        <View style={styles.planBox}>
          <View>
            <Text style={styles.planTitle}>Premium Plan</Text>
            <Text style={styles.planSub}>Billed monthly · Cancel anytime</Text>
          </View>

          <View style={styles.priceWrap}>
            <Text style={styles.price}>$4.99</Text>
            <Text style={styles.per}>/ month</Text>
          </View>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Upgrade Now</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.secondaryText}>Maybe Later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpgradePremiumScreen;

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

  headerTitle: {
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

  /* ICON */
  iconWrap: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },

  subtitle: {
    textAlign: 'center',
    color: '#8B8CA7',
    marginTop: 6,
    paddingHorizontal: 40,
  },

  /* FEATURES */
  card: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
  },

  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  featureLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  featureIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  featureText: {
    fontSize: 13,
    color: '#111827',
  },

  tick: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* PLAN */
  planBox: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  planTitle: {
    fontWeight: '600',
  },

  planSub: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  priceWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  price: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },

  per: {
    fontSize: 12,
    color: '#8B8CA7',
    marginLeft: 4,
  },

  /* FOOTER */
  footer: {
    padding: 20,
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },

  secondaryText: {
    textAlign: 'center',
    marginTop: 12,
    color: '#8B8CA7',
  },
});
