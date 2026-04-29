import { StyleSheet } from 'react-native';
import { COLORS } from '@/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  topContent: {
    paddingBottom: 10,
  },

  listContent: {
    paddingBottom: 20,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontWeight: '600',
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: '#E6F4F2',
  },

  deleteText: {
    color: COLORS.primary,
    fontSize: 12,
  },

  tripCard: {
    margin: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 14,
  },

  tripTitle: {
    fontWeight: '600',
  },

  tripSub: {
    fontSize: 12,
    color: '#8B8CA7',
    marginTop: 3,
  },

  inviteLink: {
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
  },

  inviteText: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  label: {
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 12,
    color: '#6B7280',
  },

  input: {
    marginHorizontal: 20,
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  sendBtn: {
    marginHorizontal: 20,
    marginTop: 12,
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  sendText: {
    color: '#fff',
    fontWeight: '600',
  },

  memberHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontWeight: '600',
  },

  link: {
    color: COLORS.primary,
    fontSize: 12,
  },

  footer: {
    padding: 20,
    backgroundColor: '#fff',
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  secondaryText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default styles;
