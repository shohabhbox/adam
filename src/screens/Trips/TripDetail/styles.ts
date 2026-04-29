import { StyleSheet } from 'react-native';
import { COLORS } from '@/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  /* HEADER */
  headerWrapper: {
    height: 220,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },

  headerImage: {
    width: '100%',
    height: '100%',
  },

  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#ffffffcc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addShareBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pool: {
    backgroundColor: COLORS.primary + 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  poolText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
  },

  leaveBtn: {
    backgroundColor: '#ffffffcc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },

  leaveText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
  },

  headerOverlay: {
    position: 'absolute',
    bottom: 15,
    left: 20,
  },

  tripTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  subText: {
    color: '#E5E7EB',
    fontSize: 12,
    marginTop: 2,
  },

  /* CARD */
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 15,
    padding: 15,
    borderRadius: 16,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },

  /* BALANCE */
  balanceRow: {
    marginBottom: 12,
  },

  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  balanceTrack: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
  },

  balanceFill: {
    height: 6,
    borderRadius: 6,
  },

  /* TABS */
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E5E7EB',
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 12,
    padding: 4,
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },

  tabActive: {
    backgroundColor: COLORS.primary,
  },

  tabText: {
    color: '#6B7280',
  },

  tabActiveText: {
    color: '#fff',
    fontWeight: '600',
  },

  /* CONTENT */
  content: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  meta: {
    fontSize: 12,
    color: '#8B8CA7',
    marginBottom: 10,
  },

  /* PLACE */
  placeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 14,
    marginBottom: 12,
    alignItems: 'center',
  },

  placeImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 10,
  },

  placeTitle: {
    fontWeight: '600',
  },

  tag: {
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },

  tagText: {
    fontSize: 10,
    color: '#fff',
  },

  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },

  /* ================= SHARED POOL ITEM ================= */

  sharedCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 12,
    alignItems: 'flex-start',
    overflow: 'hidden',
  },

  sharedImage: {
    width: 90,
    height: '100%',
    marginRight: 10,
  },

  actionRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  addBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 10,
  },

  addText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  deleteBtn: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },

  deleteText: {
    fontSize: 12,
    color: '#6B7280',
  },
  likesText: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    paddingVertical: 10,

  },
});

export default styles;
