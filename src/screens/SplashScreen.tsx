import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <ImageBackground
      source={require('../../assets/church.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Faith Church App</Text>
          <Text style={styles.subtitle}>Please select your role</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AdminLogin')} // ✅ Go to Admin Login
          >
            <Text style={styles.buttonText}>👤 Admin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MemberDashboard')} // ✅ Go to Member screen
          >
            <Text style={styles.buttonText}>🧑‍🤝‍🧑 Member</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('VisitorInfo')} // ✅ Go to Visitor Info
          >
            <Text style={styles.buttonText}>🙋 Visitor</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: '85%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#4A90E2',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});