import React from 'react';
import { Text, View, FlatList } from 'react-native';
import posts from '../Helpers/Data.js';
import PostItem from './PostItem';

const Posts = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostItem post={item}></PostItem>}/>
    </View>
  );
};

export default Posts;