// components/FormField.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
};

export default function FormField({ label, placeholder, value, onChangeText, keyboardType = 'default' }: Props) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
         placeholderTextColor="#C2C2C2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: { marginBottom: 18 },
  label: {
    fontSize: 14,
    color: '#4D4D4D',
    fontFamily:'Noto Sans',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    height: 54,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#CBD5E0',
    paddingHorizontal: 14,
    borderRadius: 8,
    fontSize: 15,
  },
  placeholder:{
    color:'#C2C2C2',
  }
});
