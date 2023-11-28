import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

export default function AddPostScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const takePhoto = () => {
    launchCamera(photoOption)
    .then(currentPhoto => {
      setPhoto(currentPhoto.assets[0])
    })
  };

  const photoOption = { maxHeight: 1000,maxWidth: 1000,
    mediaType: 'photo'};
    
  const handleAddPost = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajout Publication</Text>
      <Text style={styles.label}>Titre</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Description de la publication :</Text>
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddPost} style={styles.addButton}>
        <Text style={styles.addButtonText}>Ajouter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.galleryButton}>
        <Text style={styles.buttonText}>Galerie</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.photoButton}>
        <Text style={styles.buttonText}>Prendre une photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '',
    color: 'black',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#03CEA4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  galleryButton: {
    backgroundColor: '#03CEA4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  photoButton: {
    backgroundColor: '#03CEA4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});