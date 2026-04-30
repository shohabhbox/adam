import { StyleSheet } from 'react-native';
import { COLORS } from '@/constant';

export default StyleSheet.create({
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

  badge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  badgeText: {
    color: '#F59E0B',
    fontSize: 12,
  },

  /* TABS */
  tabs: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    padding: 4,
  },

  tab: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: COLORS.primary,
  },

  tabText: {
    color: '#6B7280',
  },

  activeText: {
    color: '#fff',
    fontWeight: '600',
  },

  /* CARD */
  card: {
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#fff',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  avatarText: {
    fontWeight: '600',
  },

  name: {
    fontWeight: '600',
  },

  time: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  pendingBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  pendingText: {
    color: '#F59E0B',
    fontSize: 11,
  },

  /* ACTIONS */
  actions: {
    flexDirection: 'row',
    marginTop: 12,
  },

  cancelBtn: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 8,
  },

  cancelText: {
    color: '#6B7280',
  },

  resendBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  resendText: {
    color: '#fff',
    fontWeight: '600',
  },
  /* INFO */
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#EEF2F7',
  },

  infoText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 8,
    flex: 1,
  },
});
