import { COLORS } from '@/constant';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    marginTop: 10,
    paddingHorizontal: 20,
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profile: {
    alignItems: 'center',
    marginTop: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  email: {
    color: '#8B8CA7',
    fontSize: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },

  statBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  statValue: {
    fontSize: 18,
    fontWeight: '700',
  },

  statLabel: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  card: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 16,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  menuTitle: {
    fontWeight: '500',
  },

  menuSub: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  badge: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 8,
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
  },

  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 15,
    borderRadius: 14,
    backgroundColor: '#fff',
  },

  logoutText: {
    marginLeft: 10,
    color: '#EF4444',
    fontWeight: '500',
  },
});
