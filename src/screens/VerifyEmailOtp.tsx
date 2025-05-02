import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VerifyEmailOtp = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation<any>();

  const MOCK_OTP = '123456'; // For testing

  const handleVerify = () => {
    if (otp === MOCK_OTP) {
      Alert.alert('Success ✅', 'Email verified successfully!');
      navigation.replace('VerifyPhoneOtp'); // ✅ Go to phone OTP next
    } else {
      Alert.alert('Invalid OTP ❌', 'Please enter the correct code.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.subtitle}>
        Enter the 6-digit OTP we sent to your email.
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={6}
        placeholder="Enter Email OTP"
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyEmailOtp;

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