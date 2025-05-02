import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const VisitorForms = () => {
  const [submissions, setSubmissions] = useState([
    {
      id: '1',
      name: 'Alex Rivera',
      email: 'alex@example.com',
      message: 'Looking for more info about joining!',
    },
    {
      id: '2',
      name: 'Maria Gomez',
      email: 'maria@example.com',
      message: 'I enjoyed last Sunday’s service. Thank you!',
    },
  ]);

  const handleDelete = (id: string) => {
    setSubmissions(prev => prev.filter(s => s.id !== id));
    Alert.alert('Deleted', 'Form removed from the list.');
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.message}>{item.message}</Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id)}
      >
        <Text style={styles.deleteText}>🗑 Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Visitor Submissions</Text>

      <FlatList
        data={submissions}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>No visitor forms yet.</Text>
        }
      />
    </View>
  );
};

export default VisitorForms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f6fa',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#4A90E2',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 15,
    color: '#666',
  },
  message: {
    fontSize: 15,
    fontStyle: 'italic',
    marginVertical: 8,
    color: '#444',
  },
  deleteButton: {
    backgroundColor: '#F44336',
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 6,
  },
  deleteText: {
    color: '#fff',
    fontSize: 14,
  },
  empty: {
    marginTop: 40,
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
  },
});