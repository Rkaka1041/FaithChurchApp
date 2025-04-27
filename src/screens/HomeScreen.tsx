import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🙏 Welcome to Faith Lake Forest Church App!</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="View Events" 
          onPress={() => navigation.navigate('Events')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Submit Prayer Request" 
          onPress={() => navigation.navigate('Prayer')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Donate" 
          onPress={() => navigation.navigate('Donate')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#4a90e2',
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});