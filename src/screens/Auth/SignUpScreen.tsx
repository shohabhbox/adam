import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { COLORS, SIZES, FONTS, FONTFAMILY, SCREENS } from '@/constant';
import { CustomButton, CustomTextInput } from '@/components';
import styles from './styles';

const SignUpScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Start mapping your world</Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        {/* FULL NAME */}
        <CustomTextInput
          label="FULL NAME"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          leftIcon="user"
        />

        {/* EMAIL */}
        <CustomTextInput
          label="EMAIL"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* PASSWORD */}
        <CustomTextInput
          label="PASSWORD"
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* BUTTON */}
        <CustomButton
          title="Create Account →"
          onPress={() => {}}
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
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.Login)}>
            <Text> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
