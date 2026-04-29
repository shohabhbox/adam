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
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  newBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
  },

  newText: {
    color: '#fff',
    fontWeight: '600',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /* ================= TRIP HEADER ================= */

  headerWrapper: {
    height: 220,

    overflow: 'hidden',
    paddingHorizontal: 15,
    borderRadius: 10,
  },

  headerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#ffffffcc',
    justifyContent: 'center',
    alignItems: 'center',
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
    right: 20,
  },
  editOverlay: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 99,
  },
  editText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },

  tripTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },

  subText: {
    color: '#E5E7EB',
    fontSize: 12,
    marginTop: 3,
  },

  /* ================= BALANCE BAR ================= */

  balanceRow: {
    marginBottom: 14,
  },

  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  balanceTitle: {
    fontSize: 13,
    color: '#374151',
    fontWeight: '500',
  },

  balanceValue: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  balanceTrack: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
    overflow: 'hidden',
  },

  balanceFill: {
    height: 6,
    borderRadius: 6,
  },

  /* ================= SEGMENT TABS ================= */

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
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },

  tabActiveText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
  },

  /* ================= PLACE CARD ================= */

  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },

  likesText: {
    fontSize: 12,
    color: '#374151',
  },

  /* ================= ITINERARY ITEM ================= */

  itineraryRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  timeline: {
    width: 20,
    alignItems: 'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    marginTop: 6,
  },

  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 2,
  },

  itineraryCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    alignItems: 'center',
    overflow: 'hidden',
  },

  itineraryImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },

  itineraryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },

  itineraryMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },

  timeText: {
    fontSize: 12,
    color: '#8B8CA7',
    marginLeft: 4,
  },
});

export default styles;
