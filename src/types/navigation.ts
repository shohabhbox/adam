import { NavigatorScreenParams } from '@react-navigation/native';

/* ================= AUTH STACK ================= */
export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  VerifyCode: undefined;
  CreateNewPassword: undefined;
  LocationPermission: undefined;
};

/* ================= APP STACK ================= */
export type AppStackParamList = {
  MainTabs: NavigatorScreenParams<BottomTabParamList>;
};

/* ================= BOTTOM TABS ================= */
export type BottomTabParamList = {
  Home: undefined;
  Map: undefined;
  Trips: undefined;
  Profile: undefined;
};

/* ================= ROOT ================= */
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppStackParamList>;
};