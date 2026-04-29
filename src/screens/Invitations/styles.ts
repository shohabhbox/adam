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

  bell: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#F59E0B',
    borderRadius: 8,
    paddingHorizontal: 4,
  },

  badgeText: {
    fontSize: 10,
    color: '#fff',
  },

  /* TABS */
  tabs: {
    flexDirection: 'row',
    margin: 20,
  },

  tab: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: '#E6F4F2',
  },

  tabText: {
    fontSize: 12,
    color: '#6B7280',
  },

  activeText: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  /* CARD */
  card: {
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: 120,
  },

  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },

  tripName: {
    color: '#fff',
    fontWeight: '600',
  },

  time: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#fff',
    fontSize: 11,
  },

  content: {
    padding: 12,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  avatarText: {
    color: '#fff',
    fontSize: 12,
  },

  invited: {
    fontSize: 12,
  },

  metaRow: {
    flexDirection: 'row',
    marginTop: 8,
  },

  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },

  metaText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#6B7280',
  },

  btnRow: {
    flexDirection: 'row',
    marginTop: 12,
  },

  acceptBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 8,
  },

  acceptText: {
    color: '#fff',
    fontWeight: '500',
  },

  declineBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },

  declineText: {
    color: '#EF4444',
    fontWeight: '500',
  },

  /* FRIEND INVITE CARD */
  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 12,
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#fff',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontWeight: '600',
  },

  sub: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  actions: {
    alignItems: 'flex-end',
  },
});
