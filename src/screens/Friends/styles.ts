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
    alignItems: 'center',
    justifyContent: 'space-between',
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

  addBtn: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* SEARCH */
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    height: 40,
  },

  /* TABS */
  tabs: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  tab: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginRight: 10,
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: COLORS.primary + '20',
  },

  tabText: {
    fontSize: 12,
    color: '#6B7280',
  },

  activeText: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  /* LIST ITEM */
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 16,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  avatarText: {
    fontWeight: '600',
  },

  name: {
    fontWeight: '600',
  },

  sub: {
    fontSize: 12,
    color: '#8B8CA7',
  },
});
