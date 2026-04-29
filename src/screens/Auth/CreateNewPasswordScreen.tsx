import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { CustomButton, CustomTextInput } from '@/components';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import Icon, { Icons } from '@/components/Icon';
import { SCREENS } from '@/constant/config';

const CreateNewPasswordScreen = () => {
  const navigation = useAppNavigation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // if (password !== confirmPassword) {
    //   console.log('Passwords do not match');
    //   return;
    // }


    navigation.navigate(SCREENS.LocationPermission);
    console.log('New Password:', password);
  };

  return (
    <View style={styles.container}>
      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Icon type={Icons.Ionicons} name="arrow-back" />
      </TouchableOpacity>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.subtitle}>
          Enter the email associated with your account{'\n'}
          and we'll send a reset link.
        </Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        {/* NEW PASSWORD */}
        <CustomTextInput
          placeholder="New Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          label="NEW PASSWORD"
        />

        {/* CONFIRM PASSWORD */}
        <CustomTextInput
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          label="CONFIRM NEW PASSWORD"  
        />

        {/* BUTTON */}
        <CustomButton
          title="Submit"
          onPress={handleSubmit}
          containerStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default CreateNewPasswordScreen;
