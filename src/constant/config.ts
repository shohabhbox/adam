import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const { width, height } = Dimensions.get('window');

/* *************** COLORS *************** */
export const COLORS = {
  primary: '#068296',
  primaryDark: '#04606f',
  primaryLight: '#06829620',

  secondary: '#F4C430', // subtle gold (matches proposal tone)
  background: '#F8FAFB',
  white: '#FFFFFF',
  black: '#000000',

  textPrimary: '#0B132B',
  textSecondary: '#6B7280',

  border: '#E5E7EB',
  grey: '#C7C7CC',

  success: '#22C55E',
  error: '#EF4444',

  transparent: 'transparent',
  icon: '#B0B2C4',
};

export const IMAGES = {
  LocationPermission: require('@/assets/images/LocationPermission.png'),
  locationSample: require('@/assets/images/locationSample.png'),
  stars: require('@/assets/icon/stars.png'),
  marker: require('@/assets/icon/marker.png'),
  check: require('@/assets/images/check.png'),
};
/* *************** FONT FAMILY *************** */
export const FONTFAMILY = {
  Regular: 'PlusJakartaSans-Regular',
  Medium: 'PlusJakartaSans-Medium',
  Bold: 'PlusJakartaSans-Bold',
  ExtraBold: 'PlusJakartaSans-ExtraBold', // 🔥 important
};

/* *************** SIZES *************** */
export const SIZES = {
  // spacing
  xs: height * 0.005,
  sm: height * 0.01,
  md: height * 0.02,
  lg: height * 0.03,
  xl: height * 0.05,

  // font sizes
  h12: RFValue(12, height),
  h14: RFValue(14, height),
  h16: RFValue(16, height),
  h18: RFValue(18, height),
  h20: RFValue(20, height),
  h24: RFValue(24, height),
  h28: RFValue(28, height),
};

/* *************** FONTS *************** */
export const FONTS = {
  regular: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: SIZES.h14,
    color: COLORS.textPrimary,
  },
  medium: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.h16,
    color: COLORS.textPrimary,
  },
  bold: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h18,
    color: COLORS.textPrimary,
  },

  title: {
    fontFamily: FONTFAMILY.ExtraBold,
    fontSize: 30,
    lineHeight: 45,
    letterSpacing: -0.8,
  },

  subtitle: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: 15,
    lineHeight: 22.5,
    color: '#8B8CA7',
  },
};

/* *************** GLOBAL STYLES *************** */
export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.md,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SIZES.md,
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* *************** SCREENS *************** */
export const SCREENS = {
  Splash: 'Splash',
  Onboarding: 'Onboarding',

  Login: 'Login',
  SignUp: 'SignUp',
  ResetPassword: 'ResetPassword',
  VerifyCode: 'VerifyCode',
  CreateNewPassword: 'CreateNewPassword',
  LocationPermission: 'LocationPermission',

  SearchScreen: 'SearchScreen',
  LocationDetailScreen: 'LocationDetailScreen',
  SelectCategoryScreen: 'SelectCategoryScreen',
  SavedLocationDetail: 'SavedLocationDetail',
  CreateTripScreen: 'CreateTripScreen',
  EditTripScreen: 'EditTripScreen',
  TripDetailScreen: 'TripDetailScreen',
  ReorderScreen: 'ReorderScreen',
  TripPlaces: 'TripPlaces',
  AISuggestions: 'AISuggestions',
  ManageMembersScreen: 'ManageMembersScreen',
  ProfileScreen: 'ProfileScreen',
  FriendsScreen: 'FriendsScreen',
  FriendsProfileScreen: 'FriendsProfileScreen',
  AddFriendScreen: 'AddFriendScreen',
  InvitationsScreen: 'InvitationsScreen',
  TravelTimelineScreen: 'TravelTimelineScreen',

  Home: 'Home',
  Map: 'Map',
  Import: 'Import',
  Trips: 'Trips',
  Profile: 'Profile',

  AUTH_STACK: 'AuthStack',
  APP_STACK: 'AppStack',
} as const;

/* *************** CONSTANTS *************** */
export const CONSTANTS = {
  STORAGE_KEYS: {
    TOKEN: 'TOKEN',
    USER: 'USER',
    FIRST_TIME: 'FIRST_TIME',
  },
};

/* *************** API *************** */
export const API = {
  BASE_URL: 'https://your-api.com/api/',

  // Auth
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',

  // Travel Core
  IMPORT: 'import',
  LOCATIONS: 'locations',
  CREATE_TRIP: 'trips',
  GET_TRIPS: 'trips',

  // AI
  AI_SUMMARY: 'ai/summary',
};
