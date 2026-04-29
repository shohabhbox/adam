import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { COLORS, SIZES, FONTS, SCREENS } from '@/constant';
import { CustomButton, CustomTextInput } from '@/components';
import { SafeAreaView } from 'react-native-safe-area-context'; // ✅ FIX

import styles from './styles';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useAppNavigation();

  function handleLogin() {
    // navigation.navigate('App'); // Navigate to the main app screen after successful login
    // Implement login logic here
  }

  function handleForgotPassword() {
    navigation.navigate(SCREENS.ResetPassword); // Navigate to the Reset Password screen
  }
  function handleSignUp() {
    navigation.navigate(SCREENS.SignUp); // Navigate to the Sign Up screen
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue your journey</Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        {/* EMAIL */}
        <Text style={styles.label}>EMAIL</Text>
        <CustomTextInput
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* PASSWORD */}
        <Text style={styles.label}>PASSWORD</Text>
        <CustomTextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          leftIcon="lock"
          rightIcon="visibility-off"
        />

        {/* FORGOT */}
        <TouchableOpacity style={styles.forgot} onPress={handleForgotPassword}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* BUTTON */}
        <CustomButton
          title="Sign In →"
          onPress={handleLogin}
          containerStyle={styles.button}
        />

        {/* OR */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* SOCIAL */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signup}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
