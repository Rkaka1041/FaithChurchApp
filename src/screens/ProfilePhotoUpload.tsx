import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const ProfilePhotoUpload = () => {
  const [imageUri, setImageUri] = useState<any>(null);
  const navigation = useNavigation<any>();

  const handlePickImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 0.7 },
      (response: any) => {
        if (response.didCancel) return;
        if (response.errorMessage) {
          Alert.alert('Error', response.errorMessage);
        } else {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  const handleFinish = () => {
    if (!imageUri) {
      Alert.alert('Upload Required', 'Please upload a photo to continue.');
      return;
    }

    Alert.alert('Profile Set!', 'Welcome Admin 🎉');
    navigation.replace('AdminDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Your Profile Photo</Text>

      <TouchableOpacity onPress={handlePickImage} style={styles.uploadBox}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.uploadText}>Tap to select image</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>Finish Registration</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePhotoUpload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f1f6ff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4A90E2',
    marginBottom: 30,
  },
  uploadBox: {
    height: 200,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
  },
  uploadText: {
    fontSize: 16,
    color: '#888',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});