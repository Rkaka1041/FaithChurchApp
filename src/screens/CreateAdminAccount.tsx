import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Declare global admin credential storage
declare global {
  var adminCredentials: { [username: string]: string } | undefined;
}

const CreateAdminAccount = () => {
  const navigation = useNavigation<any>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    Alert.alert('OTP Sent', 'A test OTP has been sent to email and phone.');
    setOtp('123456'); // Simulated OTP
  };

  const handleVerifyAndCreate = () => {
    if (otp !== '123456') {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP.');
      return;
    }

    if (!username || !password) {
      Alert.alert('Missing Info', 'Username and password are required.');
      return;
    }

    // Save admin credentials globally
    if (!global.adminCredentials) {
      global.adminCredentials = {};
    }
    global.adminCredentials[username] = password;

    Alert.alert('Welcome 🎉', `Admin account created for ${firstName} ${lastName}`);

    navigation.replace('AdminDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Admin Account</Text>

      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Enter OTP" value={otp} onChangeText={setOtp} keyboardType="number-pad" />

      <TouchableOpacity style={styles.button} onPress={handleVerifyAndCreate}>
        <Text style={styles.buttonText}>Verify & Create</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAdminAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});