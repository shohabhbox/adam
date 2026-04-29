import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTFAMILY, FONTS } from '@/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.lg,
  },

  header: {
    alignItems: 'center',
    marginBottom: SIZES.xl,
  },

  label: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: '#4A4B5C',
  },

  title: {
    fontFamily: FONTFAMILY.ExtraBold,
    fontSize: 30,
    lineHeight: 45,
    letterSpacing: -0.8,
    textAlign: 'center',
    color: COLORS.textPrimary,
  },

  subtitle: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: 15,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#8B8CA7',
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 25,
    padding: SIZES.lg,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },

  button: {
    marginTop: SIZES.lg,
    borderRadius: 12,
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.lg,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },

  or: {
    marginHorizontal: 10,
    color: COLORS.textSecondary,
    fontSize: SIZES.h12,
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  socialBtn: {
    flex: 1,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  socialText: {
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.textPrimary,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.lg,
  },

  footerText: {
    fontFamily: FONTFAMILY.Regular,
    color: COLORS.textSecondary,
  },

  link: {
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    
  },

  forgot: {
    alignSelf: 'flex-end',
    marginTop: 5,
    fontWeight: 'bold',
  },

  forgotText: {
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.textPrimary,
    fontSize: SIZES.h12,
  },

  backBtn: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  signup: {
    ...FONTS.medium,
    color: COLORS.primary,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  otpInput: {
    width: 45,
    height: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.textPrimary,
    backgroundColor: '#F4F6F8',
  },

  filledBox: {
    borderColor: COLORS.primary,
  },

  resendText: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    marginBottom: 15,
  },

  timerBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2F7',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default styles;
