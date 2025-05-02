import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const ApproveMembers = () => {
  const [pendingMembers, setPendingMembers] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'David Johnson', email: 'david@example.com' },
  ]);

  const handleDecision = (id: string, decision: 'approve' | 'reject') => {
    setPendingMembers(prev => prev.filter(member => member.id !== id));
    Alert.alert(
      `Member ${decision === 'approve' ? 'Approved' : 'Rejected'}`,
      `You ${decision}d the member.`
    );
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.approveButton]}
          onPress={() => handleDecision(item.id, 'approve')}
        >
          <Text style={styles.buttonText}>✅ Approve</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.rejectButton]}
          onPress={() => handleDecision(item.id, 'reject')}
        >
          <Text style={styles.buttonText}>❌ Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pending Member Requests</Text>

      {pendingMembers.length === 0 ? (
        <Text style={styles.noPending}>No pending members</Text>
      ) : (
        <FlatList
          data={pendingMembers}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default ApproveMembers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f7fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4A90E2',
  },
  noPending: {
    fontSize: 18,
    color: '#777',
    marginTop: 40,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  email: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  approveButton: {
    backgroundColor: '#4CAF50',
  },
  rejectButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});