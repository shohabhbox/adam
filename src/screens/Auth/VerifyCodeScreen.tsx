import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import { COLORS, SCREENS } from '@/constant';
import { CustomButton } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import Icon, { Icons } from '@/components/Icon';

const OTP_LENGTH = 6;

const VerifyCodeScreen = () => {
  const navigation = useAppNavigation();

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [timer, setTimer] = useState(168); // seconds

  const inputs = useRef<TextInput[]>([]);

  /* ================= TIMER ================= */
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = () => {
    const min = Math.floor(timer / 60);
    const sec = timer % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  /* ================= OTP HANDLER ================= */
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join('');
    console.log('OTP:', code);

    navigation.navigate(SCREENS.CreateNewPassword);
  };

  return (
    <View style={styles.container}>
      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Icon type={Icons.MaterialIcons} name="arrow-back" />
      </TouchableOpacity>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Verify Your Email</Text>
        <Text style={styles.subtitle}>
          We sent a 6-digit code to{'\n'}
          <Text style={{ color: COLORS.primary }}>alex@email.com</Text>
        </Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        {/* LABEL */}
        <Text style={[styles.label, { textAlign: 'center' }]}>
          ENTER VERIFICATION CODE
        </Text>

        {/* OTP INPUT */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => {
                inputs.current[index] = ref!;
              }}
              style={[styles.otpInput, digit && styles.filledBox]}
              value={digit}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={value => handleChange(value, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace(index);
                }
              }}
            />
          ))}
        </View>

        {/* RESEND */}
        <Text style={styles.resendText}>
          Didn’t receive code?{' '}
          <Text style={{ color: COLORS.primary }}>Resend</Text>
        </Text>

        {/* TIMER */}
        <View style={styles.timerBox}>
          <Text style={{ color: COLORS.primary }}>• {formatTime()}</Text>
          <Text style={{ marginLeft: 5, color: COLORS.textSecondary }}>
            remaining
          </Text>
        </View>

        {/* BUTTON */}
        <CustomButton
          title="Verify Code →"
          onPress={handleVerify}
          containerStyle={styles.button}
        />

        {/* CHANGE EMAIL */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Wrong email?</Text>
          <TouchableOpacity>
            <Text style={styles.link}> Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerifyCodeScreen;
