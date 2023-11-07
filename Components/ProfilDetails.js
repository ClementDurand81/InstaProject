import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

const ProfileDetail = () => {
  const profileData = {
    username: 'cmt.drd',
    fullName: 'Clément Durand',
    bio: 'Développeur',
    posts: 150,
    followers: 1000,
    following: 500,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileBanner}>
        <View style={styles.profileImageContainer}>
          <Icon name="person" size={100} color="black" />
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{profileData.username}</Text>
          </View>
          <Text style={styles.fullName}>{profileData.fullName}</Text>
          <Text style={styles.bio}>{profileData.bio}</Text>
        </View>
      </View>
      <View style={styles.secondaryBanner}>
        <TouchableOpacity style={styles.statItem}>
          <Text style={styles.statNumber}>{profileData.posts}</Text>
          <Text style={styles.statText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statItem}>
          <Text style={styles.statNumber}>{profileData.followers}</Text>
          <Text style={styles.statText}>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statItem}>
          <Text style={styles.statNumber}>{profileData.following}</Text>
          <Text style={styles.statText}>Following</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  profileBanner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  fullName: {
    fontSize: 16,
  },
  bio: {
    fontSize: 14,
    color: 'gray',
  },
  secondaryBanner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ProfileDetail;
