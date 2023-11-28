import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AddPostScreen({ navigation }) {
  const titleRef = useRef('');
  const descriptionRef = useRef('');
  const [image, setImage] = useState(null);

  const handleAddPost = () => {
    console.log('Titre :', titleRef.current);
    console.log('Description :', descriptionRef.current);
    console.log('Image :', image);
  }

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajout de Publication</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Titre</Text>
        <TextInput
          onChangeText={(text) => {
            titleRef.current = text;
          }}
          style={styles.input}
        />
        <Text style={styles.label}>Description de la publication :</Text>
        <TextInput
          onChangeText={(text) => {
            descriptionRef.current = text;
          }}
          multiline
          style={[styles.input, styles.multilineInput]}
        />
        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      </View>
      <TouchableOpacity onPress={handleAddPost} style={styles.addButton}>
        <Text style={styles.addButtonText}>Ajouter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pickImageFromGallery} style={styles.actionButton}>
        <Text style={styles.buttonText}>Choisir depuis la Galerie</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={takePhoto} style={styles.actionButton}>
        <Text style={styles.buttonText}>Prendre une Photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    resizeMode: 'cover',
    borderRadius: 5,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#03CEA4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
