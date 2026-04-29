import { COLORS, FONTFAMILY } from '@/constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  subTitle: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0,
    color: COLORS.textSecondary,
  },

  title: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: 20,
    fontWeight: '700', // Map 'Bold' to numeric weight
    lineHeight: 30,
    letterSpacing: -0.4,
    color: COLORS.textPrimary,
  },

  desc: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0,
    color: COLORS.textSecondary,
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  },

  activeCard: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  emoji: {
    fontSize: 24,
    marginRight: 10,
  },

  name: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22.5,
    letterSpacing: 0.2,
    color: COLORS.textPrimary,
  },

  sub: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    color: '#9CA3AF', // Updated to the new hex code
    marginTop: 2,
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioActive: {
    borderColor: COLORS.primary,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },

  newCategory: {
    marginTop: 15,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    alignItems: 'center',
  },

  newText: {
    color: COLORS.primary,
  },

  bottom: {
    marginBottom: 20,
  },

  delete: {
    textAlign: 'center',
    marginTop: 10,
    color: '#8B8CA7',
  },
});

export default styles;
