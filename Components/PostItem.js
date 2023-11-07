import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PostItem =  props  => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.post.title}</Text>
      <Text style={styles.user}>Posté par {props.post.user}</Text>
      <Image source={{ uri: props.post.photoLink }} style={styles.image} />
      <Text style={styles.description}>{props.post.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  user: {
    fontSize: 14,
    color: 'gray',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  description: {
    marginTop: 10,
  },
});

export default PostItem;