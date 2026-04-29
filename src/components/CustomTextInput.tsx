import React, { forwardRef, useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  TextInput as RNTextInput,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { FONTFAMILY, COLORS } from '@/constant';
import Icon, { Icons } from './Icon';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  isDescription?: boolean;

  leftIcon?: string; // optional override
  rightIcon?: string; // optional override
}

const CustomTextInput = forwardRef<RNTextInput, CustomTextInputProps>(
  (
    {
      label,
      error,
      secureTextEntry,
      containerStyle,
      isDescription = false,
      value,
      keyboardType,
      leftIcon,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const isPasswordField = secureTextEntry === true;
    const isEmailField = keyboardType === 'email-address';

    /* 🔥 AUTO ICON LOGIC */
    const finalLeftIcon =
      leftIcon ||
      (isPasswordField ? 'lock' : isEmailField ? 'mail' : undefined);

    const showEyeIcon = isPasswordField;

    return (
      <View style={[styles.container, containerStyle]}>
        {label && <Text style={styles.label}>{label}</Text>}

        <View style={styles.inputWrapper}>
          {/* LEFT ICON */}
          {finalLeftIcon && (
            <Icon
              type={Icons.Feather}
              name={finalLeftIcon}
              size={20}
              color={COLORS.icon}
              style={{ marginLeft: 12, marginRight: 8 }}
            />
          )}

          {/* INPUT */}
          <TextInput
            ref={ref}
            {...props}
            value={value}
            keyboardType={keyboardType}
            multiline={isDescription}
            numberOfLines={isDescription ? 5 : 1}
            style={[styles.input, isDescription && styles.multilineInput]}
            placeholderTextColor={COLORS.grey}
            secureTextEntry={isPasswordField && !isPasswordVisible}
          />

          {/* RIGHT ICON */}
          {showEyeIcon ? (
            <TouchableOpacity
              style={{ marginRight: 12 }}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <Icon
                type={Icons.Feather}
                name={isPasswordVisible ? 'eye' : 'eye-off'}
                size={20}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          ) : (
            rightIcon && (
              <Icon
                type={Icons.Feather}
                name={rightIcon}
                size={20}
                color={COLORS.icon}
                style={{ marginRight: 12 }}
              />
            )
          )}
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  },
);

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  label: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: '#4A4B5C',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#F8F9FCCC',
    borderWidth: 1,
    borderColor: COLORS.border,
    height: 50,
  },

  input: {
    flex: 1,

    fontFamily: FONTFAMILY.Regular,
    fontSize: 15,
    lineHeight: 22.5,
    letterSpacing: 0,
    color: '#C0C2D2',
  },

  multilineInput: {
    textAlignVertical: 'top',
    minHeight: 120,
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
