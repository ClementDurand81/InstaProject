import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const PostItem = props => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.post.title}</Text>
      <Text style={styles.user}>Posté par {props.post.user}</Text>
      <Image source={{ uri: props.post.photoLink }} style={styles.image} />
      {showDescription ? (
        <View>
          <Text style={styles.description}>{props.post.description}</Text>
          <Button
            title="Masquer la description"
            onPress={toggleDescription}
          />
        </View>
      ) : (
        <Button
          title="Afficher la description"
          onPress={toggleDescription}
        />
      )}
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
