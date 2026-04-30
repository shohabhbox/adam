import { StyleSheet } from 'react-native';
import { COLORS } from '@/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  subTitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  desc: {
    marginHorizontal: 20,
    marginTop: 10,
    color: '#8B8CA7',
  },

  /* CARD */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 12,
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#fff',
  },

  cardActive: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 10,
  },

  name: {
    fontWeight: '600',
  },

  meta: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  check: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* CREATE */
  createBox: {
    margin: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D1D5DB',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  createText: {
    marginLeft: 6,
    color: '#6B7280',
  },

  /* FOOTER */
  footer: {
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
  },
});
