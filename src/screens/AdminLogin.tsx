import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Declare global variable for credentials
declare global {
  var adminCredentials: { [username: string]: string } | undefined;
}

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (!global.adminCredentials) {
      global.adminCredentials = {};
    }
  }, []);

  const handleLogin = () => {
    const credentials = global.adminCredentials || {};
    const storedPassword = credentials[username];

    if (storedPassword && storedPassword === password) {
      Alert.alert('Login Success ✅', 'Welcome, Admin!');
      navigation.replace('AdminDashboard', { username }); // ✅ Pass username
    } else {
      Alert.alert('Login Failed ❌', 'Invalid username or password.');
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAdminAccount');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={styles.linkText}>Create New Admin Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminLogin;

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
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  linkText: {
    textAlign: 'center',
    color: '#007aff',
    fontSize: 16,
    marginTop: 12,
  },
});