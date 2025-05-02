import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VisitorInfoScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Welcome to Faith Lutheran Church 🙏</Text>

      <Text style={styles.info}>
        📍 Address: 680 W. Deerpath Road, Lake Forest, IL 60045
      </Text>
      <Text style={styles.info}>📞 Phone: (847) 234-1868</Text>
      <Text style={styles.info}>🌐 Website: faithlakeforest.org</Text>

      <Text style={styles.section}>🕒 Worship Schedule</Text>
      <Text style={styles.info}>• Saturdays @ 5 PM (Blended Worship)</Text>
      <Text style={styles.info}>• Sundays @ 8 AM & 10:30 AM (Traditional)</Text>

      <Text style={styles.section}>📖 Our Mission</Text>
      <Text style={styles.info}>
        Glorifying God by spreading the Gospel through preaching, teaching, and living our daily lives.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('VisitorForm')}
      >
        <Text style={styles.buttonText}>🙋 Join as a Visitor</Text>
      </TouchableOpacity>

      {/* 🙏 Prayer Request Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PrayerRequestForm')}
      >
        <Text style={styles.buttonText}>🙏 Submit Prayer Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default VisitorInfoScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9ff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A90E2',
  },
  section: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: '600',
    color: '#333',
  },
  info: {
    fontSize: 16,
    marginTop: 8,
    color: '#444',
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});