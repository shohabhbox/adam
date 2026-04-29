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

  cancelBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },

  cancelText: {
    marginLeft: 5,
    fontSize: 13,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  /* DAY CARD */
  dayCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    padding: 15,
    borderRadius: 14,
    backgroundColor: '#E6F4F2',
  },

  dayText: {
    fontWeight: '500',
  },

  stopText: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  helper: {
    marginLeft: 20,
    color: '#9CA3AF',
    fontSize: 12,
  },

  /* CARD */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 10,
    borderRadius: 16,
  },

  indexCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  indexText: {
    fontWeight: '600',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  title: {
    fontWeight: '600',
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  time: {
    marginLeft: 5,
    fontSize: 12,
    color: '#6B7280',
  },

  /* FOOTER */
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#fff',
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
    fontSize: 16,
  },
});
