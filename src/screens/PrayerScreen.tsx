import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PrayerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🙏 Submit Your Prayer Request!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', color: 'purple' },
});