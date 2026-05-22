import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from '@/constant';

import LoginScreen from '@/screens/Auth/LoginScreen';
import SignUpScreen from '@/screens/Auth/SignUpScreen';
import ResetPasswordScreen from '@/screens/Auth/ResetPasswordScreen';
import { AuthStackParamList } from '@/types/navigation';
import VerifyCodeScreen from '@/screens/Auth/VerifyCodeScreen';
import CreateNewPasswordScreen from '@/screens/Auth/CreateNewPasswordScreen';
import LocationPermissionScreen from '@/screens/Onboarding/LocationPermissionScreen';
import SplashScreen from '@/screens/Auth/SplashScreen';
import OnboardScreen from '@/screens/Auth/Onboard';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.Splash} component={SplashScreen} />
      <Stack.Screen name={SCREENS.Onboard} component={OnboardScreen} />
      <Stack.Screen name={SCREENS.Login} component={LoginScreen} />
      <Stack.Screen name={SCREENS.SignUp} component={SignUpScreen} />
      <Stack.Screen
        name={SCREENS.ResetPassword}
        component={ResetPasswordScreen}
      />
      <Stack.Screen name={SCREENS.VerifyCode} component={VerifyCodeScreen} />
      <Stack.Screen name={SCREENS.CreateNewPassword} component={CreateNewPasswordScreen} />
      <Stack.Screen name={SCREENS.LocationPermission} component={LocationPermissionScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
