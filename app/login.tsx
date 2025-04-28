import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { icons } from '@/constants/icons';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [mobile, setMobile] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (mobile.length === 10) {
      router.push({ pathname: '/otp-verification', params: { phone: mobile } });
    } else {
      Alert.alert('Invalid number', 'Please enter a valid 10-digit mobile number.');
    }
  };

  const isValidNumber = mobile.length === 10;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Phone Icon */}
        <View>
          <Image source={icons.phoneimage} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Register / Log In</Text>

        {/* Description */}
        <Text style={styles.description}>
          Please enter your mobile number to register or log in to your account.
        </Text>

        {/* Input */}
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder="+91-XXXXXXXXXX"
          keyboardType="numeric"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.button, !isValidNumber && styles.buttonDisabled]}
        onPress={handleContinue}
        disabled={!isValidNumber}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  topSection: {
    width: 328,
    height: 207,
    gap: 20,
  },
  phoneIconContainer: {
    width: 32.5,
    height: 32.5,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 6,
    position: 'absolute',
    top: 3.75,
    left: 3.75,
  },
  title: {
    width: 165,
    height: 20,
    fontFamily: 'Noto Sans',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    color: '#000',
  },
  description: {
    width: 328,
    height: 44,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: '#797979',
  },
  input: {
    width: 328,
    height: 50,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
  },
  inputFocused: {
    borderColor: '#1E7ED4',
  },
  button: {
    width: 350,
    height: 54,
    backgroundColor: '#1E7ED4',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonDisabled: {
    backgroundColor: '#DCDCDC',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
    color: '#FFFFFF',
  },
});
