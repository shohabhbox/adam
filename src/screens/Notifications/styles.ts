import { StyleSheet } from 'react-native';
import { COLORS } from '@/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

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

  markAll: {
    backgroundColor: '#E6F4F2',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },

  markText: {
    color: COLORS.primary,
    fontSize: 12,
  },

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
  },

  section: {
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: 11,
    color: '#9CA3AF',
  },

  card: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  leftBar: {
    width: 4,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },

  content: {
    flex: 1,
    padding: 10,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },

  leftContent: {
    flexDirection: 'row',
    flex: 1,
  },

  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  desc: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
    maxWidth: 220,
  },

  time: {
    fontSize: 11,
    color: '#9CA3AF',
  },

  ctaBtn: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection:'row',
  
  },

  ctaText: {
    fontSize: 12,
    fontWeight: '500',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
