import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { COLORS, FONTFAMILY } from '@/constant';
import { Icon, Icons } from '@/components';

interface Props {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
}

const DescriptionInput: React.FC<Props> = ({
  label,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputWrapper}>
        {/* LEFT ICON */}
        <View style={styles.icon}>
          <Icon
            type={Icons.Feather}
            name="align-left"
            size={18}
            color="#8B8CA7"
          />
        </View>

        {/* TEXTAREA */}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#C0C2D2"
          multiline
          textAlignVertical="top"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default DescriptionInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  label: {
    fontSize: 12,
    fontFamily: FONTFAMILY.Bold,
    color: '#4A4B5C',
    marginBottom: 6,
    textTransform: 'uppercase',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',

    padding: 12,
  },

  icon: {
    marginRight: 8,
    marginTop: 4,
  },

  input: {
    flex: 1,
    minHeight: 100,
    fontSize: 14,
    color: '#000',
    fontFamily: FONTFAMILY.Medium,
  },
});
