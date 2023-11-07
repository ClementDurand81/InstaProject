import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PostItem = props => {
  const [showDescription, setShowDescription] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <PostHeader title={props.post.title} user={props.post.user.firstname} />
      <PostImage photoLink={props.post.photoLink} />
      <View style={styles.actionsContainer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            color={isLiked ? 'red' : 'black'}
            onPress={toggleLike}
          />
          <View style={styles.iconSpacing} /> {/* Espacement */}
          <AntDesign name="message1" size={24} color="blue" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PostDescription
          showDescription={showDescription}
          description={props.post.description}
          toggleDescription={toggleDescription}
        />
      </View>
    </View>
  );
};

const PostHeader = ({ title, user }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.user}>Posté par {user}</Text>
  </View>
);

const PostImage = ({ photoLink }) => (
  <Image source={{ uri: photoLink }} style={styles.image} />
);

const PostDescription = ({ showDescription, description, toggleDescription }) => (
  <View>
    {showDescription ? (
      <View>
        <Text style={styles.description}>{description}</Text>
        <Button
          title="Masquer"
          onPress={toggleDescription}
          titleStyle={styles.buttonTitle}
        />
      </View>
    ) : (
      <Button
        title="Afficher"
        onPress={toggleDescription}
        titleStyle={styles.buttonTitle}
      />
    )}
  </View>
);

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
  buttonContainer: {
    marginTop: 10,
    borderRadius: 10,
  },
  buttonTitle: {
    fontWeight: 'bold',
  },
  actionsContainer: {
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    width: 10,
  },
});

export default PostItem;
