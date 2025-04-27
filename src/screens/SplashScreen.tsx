import React, { useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // 👈 After 3 seconds, navigate to Home ("Who Are You?" screen)
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer if screen unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/church.jpg')} // ✅ Path to your church.jpg image
        style={styles.background}
        resizeMode="cover" // 📸 Image covers full screen
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});