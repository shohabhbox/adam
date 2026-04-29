import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './styles';
import { COLORS, SCREENS } from '@/constant';
import { CustomButton, CustomTextInput } from '@/components';
import Icon, { Icons } from '@/components/Icon';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useAppNavigation();

  function handleResetPassword() {
    navigation.navigate(SCREENS.VerifyCode);
  }

  return (
    <View style={[styles.container, { justifyContent: 'flex-start' }]}>
      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Icon type={Icons.Ionicons} name="arrow-back" />
      </TouchableOpacity>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>
          Enter the email associated with your account{'\n'}
          and we'll send a reset link.
        </Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        {/* EMAIL */}
        <CustomTextInput
          label="EMAIL"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* BUTTON */}
        <CustomButton
          title="Send Reset Code"
          onPress={handleResetPassword}
          containerStyle={styles.button}
        />

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Remember your password?</Text>

          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.Login)}>
            <Text style={styles.link}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
