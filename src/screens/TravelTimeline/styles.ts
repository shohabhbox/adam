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

  /* BADGE */
  badge: {
    margin: 20,
    alignSelf: 'flex-start',
    backgroundColor: '#E6F4F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  badgeText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '500',
  },

  /* ROW */
  row: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  timeline: {
    width: 40,
    alignItems: 'center',
  },

  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flag: {
    fontSize: 16,
  },

  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 4,
  },

  /* CARD */
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginLeft: 10,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  doneBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },

  doneText: {
    color: '#059669',
    fontSize: 11,
  },

  date: {
    fontSize: 12,
    color: '#8B8CA7',
    marginTop: 4,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },

  metaText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
});
