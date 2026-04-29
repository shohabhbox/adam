import { COLORS } from '@/constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchBar: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchText: {
    marginLeft: 10,
    color: '#8B8CA7',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  sectionTitle: {
    marginTop: 20,
    fontSize: 12,
    color: '#8B8CA7',
  },

  clear: {
    color: COLORS.primary,
  },

  /* RECENT */
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
  },

  iconBox: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  recentTitle: {
    fontSize: 14,
  },

  recentSub: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  /* TRENDING */
  trendingRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  trendingCard: {
    width: 150,
    height: 90,
    borderRadius: 15,
    marginRight: 10,
    overflow: 'hidden',
  },

  trendingImg: {
    width: '100%',
    height: '100%',
  },

  trendingText: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    color: '#fff',
  },

  /* PLACES */
  placeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 15,
    marginTop: 15,
    alignItems: 'center',
  },

  placeImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  placeTitle: {
    fontSize: 14,
  },

  metaRow: {
    flexDirection: 'row',
    marginTop: 5,
  },

  tag: {
    backgroundColor: '#E6F4F2',
    color: COLORS.primary,
    paddingHorizontal: 6,
    borderRadius: 6,
    marginRight: 5,
    fontSize: 10,
  },

  distance: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  rating: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default styles;
