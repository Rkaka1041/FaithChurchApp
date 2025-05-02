import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const CommunityFeed = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState<string[]>([]);

  const handleAddPost = () => {
    if (post.trim()) {
      setPosts([post, ...posts]);
      setPost('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Community Feed</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your message here..."
        value={post}
        onChangeText={setPost}
      />
      <Button title="Post" onPress={handleAddPost} />

      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.postItem}>{item}</Text>}
        contentContainerStyle={styles.list}
      />
    </KeyboardAvoidingView>
  );
};

export default CommunityFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9ff',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  postItem: {
    padding: 12,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  list: {
    marginTop: 10,
  },
});