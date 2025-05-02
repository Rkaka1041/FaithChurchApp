import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const dummyPrayerRequests = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Please pray for my upcoming surgery.',
  },
  {
    id: '2',
    name: 'Sarah Miller',
    message: 'Pray for my family’s strength during tough times.',
  },
  {
    id: '3',
    name: 'Michael Smith',
    message: 'I need spiritual guidance for an important decision.',
  },
];

const ViewPrayerRequests = () => {
  const renderItem = ({ item }: { item: typeof dummyPrayerRequests[0] }) => (
    <View style={styles.card}>
      <Text style={styles.name}>🧑 {item.name}</Text>
      <Text style={styles.message}>🙏 {item.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Prayer Requests</Text>
      <FlatList
        data={dummyPrayerRequests}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
};

export default ViewPrayerRequests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#4A90E2',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  message: {
    fontSize: 15,
    color: '#555',
  },
});