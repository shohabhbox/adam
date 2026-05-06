import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { COLORS, SCREENS } from '@/constant';
import { CustomButton, CustomTextInput } from '@/components';
import Icon, { Icons } from '@/components/Icon';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useAppNavigation();

  function handleResetPassword() {
    navigation.navigate(SCREENS.VerifyCode);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={[styles.container, { justifyContent: 'flex-start' }]}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon
            type={Icons.Ionicons}
            name="arrow-back"
           disabled={true}
          />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.subtitle}>
            Enter the email associated with your account{'\n'}
            and we'll send a reset link.
          </Text>
        </View>

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

            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.Login)}
            >
              <Text style={styles.link}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
