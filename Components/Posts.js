import React from 'react';
import { Text, View, FlatList } from 'react-native';
import posts from '../Helpers/Data.js';

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