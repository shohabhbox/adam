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

  /* BANNER */
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 12,
    borderRadius: 14,
    backgroundColor: '#E6F4F2',
  },

  bannerTitle: {
    fontWeight: '600',
  },

  bannerSub: {
    fontSize: 12,
    color: '#6B7280',
  },

  aiBadge: {
    marginLeft: 'auto',
    backgroundColor: '#CFFAFE',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },

  aiText: {
    fontSize: 11,
    color: '#0891B2',
  },

  /* CARD */
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 18,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 140,
  },

  tag: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },

  tagText: {
    color: '#fff',
    fontSize: 11,
  },

  match: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#111827',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },

  matchText: {
    color: '#fff',
    fontSize: 11,
  },

  content: {
    padding: 12,
  },

  name: {
    fontWeight: '600',
    fontSize: 14,
  },

  desc: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },

  btnRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  primaryBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 8,
  },

  primaryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },

  secondaryBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },

  secondaryText: {
    fontSize: 12,
    color: '#374151',
  },
});
