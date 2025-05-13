import { useState, useRef } from 'react';
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
  ActivityIndicator,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { icons } from '@/constants/icons';

const { width } = Dimensions.get('window');

export default function OtpVerificationScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputs = useRef<TextInput[]>([]);
  const { phone } = useLocalSearchParams();
  const router = useRouter();

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 5) {
        inputs.current[index + 1]?.focus();
      }
    } else if (text === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter a valid 6-digit OTP.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://mbbs-backend-3.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: phone,
          otp: enteredOtp,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        router.push('/selectionScreen');
      } else {
        Alert.alert('Verification Failed', data.message || 'Please try again.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      Alert.alert('Error', 'Something went wrong. Please check your network and try again.');
    } finally {
      setLoading(false);
    }
  };

  const isValidOtp = otp.every((digit) => digit !== '');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.topSection}>
        <Image source={icons.otpimage} />
        <Text style={styles.title}>Enter Code</Text>
        <Text style={styles.description}>
          Your temporary login code was sent to <Text style={styles.phone}>+91-{phone}</Text>
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref!)}
              style={styles.otpBox}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              autoFocus={index === 0}
            />
          ))}
        </View>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn’t receive a code?</Text>
          <TouchableOpacity>
            <Text style={styles.resendLink}>Send again</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, !isValidOtp && styles.buttonDisabled]}
        onPress={handleVerify}
        disabled={!isValidOtp || loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Continue</Text>
        )}
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
    gap: 20,
  },
  title: {
    fontFamily: 'Noto Sans',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 20,
    color: '#000',
  },
  description: {
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: '#797979',
  },
  phone: {
    color: '#000000',
    fontWeight: '600',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 54,
    gap: 10,
  },
  otpBox: {
    flex: 1,
    height: 54,
    borderRadius: 14,
    backgroundColor: '#F3F3F3',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  resendContainer: {
    width: 328,
    height: 54,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  resendText: {
    width: 142,
    height: 19,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontSize: 14,
    color: '#797979',
  },
  resendLink: {
    width: 72,
    height: 19,
    fontFamily: 'Noto Sans',
    fontWeight: '600',
    fontSize: 14,
    color: '#1E7ED4',
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
