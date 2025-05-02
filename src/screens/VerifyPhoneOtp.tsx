import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VerifyPhoneOtp = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation<any>();

  const MOCK_PHONE_OTP = '654321'; // ✅ Simulated OTP

  const handleVerify = () => {
    if (otp === MOCK_PHONE_OTP) {
      Alert.alert('Phone Verified ✅', 'Sending welcome email and SMS...');

      // ✅ Simulated sending
      console.log('📧 Sending welcome email to admin@example.com');
      console.log('📱 Sending welcome SMS to +1-234-567-8901');

      setTimeout(() => {
        Alert.alert('Welcome Message Sent ✅', 'Admin account is now ready.');
        navigation.replace('ProfilePhotoUpload'); // ✅ Proceed
      }, 1000);
    } else {
      Alert.alert('Invalid OTP ❌', 'Please check and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Phone</Text>
      <Text style={styles.subtitle}>Enter the 6-digit OTP sent to your phone number.</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={6}
        placeholder="Enter Phone OTP"
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyPhoneOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f6ff',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A90E2',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});