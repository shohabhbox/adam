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

  /* CARD */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 12,
    padding: 12,
    borderRadius: 16,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },

  name: {
    fontWeight: '600',
  },

  location: {
    fontSize: 12,
    color: '#8B8CA7',
    marginTop: 2,
  },

  tag: {
    marginTop: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  tagText: {
    fontSize: 11,
  },

  /* BUTTON */
  addBtn: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
  },

  addedBtn: {
    backgroundColor: COLORS.primary,
  },

  addText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '500',
  },

  addedText: {
    color: '#fff',
  },
});
