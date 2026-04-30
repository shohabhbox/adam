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

  /* CARD */
  card: {
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 18,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 150,
  },

  mapPin: {
    position: 'absolute',
    alignSelf: 'center',
    top: 60,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 30,
  },

  content: {
    padding: 14,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
  },

  meta: {
    fontSize: 12,
    color: '#8B8CA7',
    marginTop: 4,
  },

  /* SAVE BUTTON */
  saveBtn: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },

  saveText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
  },

  savedBtn: {
    backgroundColor: '#E6F7F7',
    borderColor: '#E6F7F7',
  },

  savedText: {
    color: COLORS.primary,
  },

  /* TAGS */
  tags: {
    flexDirection: 'row',
    marginTop: 10,
  },

  tagPrimary: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
  },

  tagPrimaryText: {
    color: COLORS.primary,
    fontSize: 11,
  },

  tagSecondary: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  tagSecondaryText: {
    fontSize: 11,
    color: '#6B7280',
  },
});
