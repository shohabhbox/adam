import { StyleSheet } from 'react-native';
import { COLORS } from '@/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  /* ================= HEADER ================= */

  header: {
    marginTop: 50,
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
    color: '#374151',
    fontWeight: '500',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },

  /* ================= TITLE ================= */

  pageTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginHorizontal: 20,
    color: '#1F2937',
  },

  /* ================= LABEL ================= */

  label: {
    marginTop: 15,
    marginHorizontal: 20,
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '500',
  },

  /* ================= ROW ================= */

  row: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
  },

  /* ================= SMALL BOX ================= */

  smallBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
    marginRight: 10,
  },

  smallLabel: {
    fontSize: 11,
    color: '#9CA3AF',
  },

  smallValue: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },

  /* ================= DELETE ================= */

  deleteBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FCA5A5',
    backgroundColor: '#FEF2F2',
  },

  deleteLabel: {
    color: '#EF4444',
    fontWeight: '500',
    fontSize: 14,
  },

  deleteSmallBtn: {
    backgroundColor: '#FECACA',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },

  deleteSmallText: {
    color: '#B91C1C',
    fontSize: 12,
    fontWeight: '600',
  },

  /* ================= FOOTER ================= */

  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;