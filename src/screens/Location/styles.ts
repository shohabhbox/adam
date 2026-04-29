import { COLORS } from '@/constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F4F7' },

  imageContainer: { height: 300 },

  image: {
    width: '100%',
    height: '100%',
  },

  backBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#00000060',
    padding: 10,
    borderRadius: 10,
  },

  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },

  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    marginTop: 5,
  },

  location: {
    color: '#fff',
    marginLeft: 5,
  },

  tipIcon: {
    width: 16,
    height: 16,
  },
  ratingBox: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#00000080',
    padding: 10,
    borderRadius: 10,
  },

  rating: { color: '#fff' },
  review: { color: '#ccc', fontSize: 12 },

  content: {
    padding: 20,
  },

  tipBox: {
    backgroundColor: '#E6F4F2',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  tipText: {
    color: COLORS.primary,
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },

  description: {
    marginTop: 15,
    color: '#555',
    lineHeight: 20,
  },

  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },

  tag: {
    backgroundColor: '#EEF2F7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },

  tagText: {
    fontSize: 12,
  },

  infoBox: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
  },

  bottomRow: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
  },

  btn: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default styles;
