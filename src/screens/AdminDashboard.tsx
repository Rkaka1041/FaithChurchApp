import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AdminDashboard = ({ route }) => {
  const { username } = route.params || {};
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert('Confirm Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log Out',
        onPress: () => navigation.replace('AdminLogin'),
        style: 'destructive',
      },
    ]);
  };

  const options = [
    { title: 'Create Event', screen: 'CreateEvent' },
    { title: 'Approve Members', screen: 'ApproveMembers' },
    { title: 'View Prayer Requests', screen: 'ViewPrayerRequests' },
    { title: 'Visitor Forms', screen: 'VisitorForms' },
    { title: 'Donation Info', screen: 'DonationDetails' },
    { title: 'Community Feed', screen: 'CommunityFeed' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome, {username || 'Admin'}!</Text>

      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logout}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#f0f4ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#3366FF',
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logout: {
    color: 'red',
    marginTop: 30,
    fontSize: 16,
  },
});