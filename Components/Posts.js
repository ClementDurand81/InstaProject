import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import PostItem from './PostItem';
import { getPosts } from './../API/postAPI.js'

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPosts().then(res => {
      setPosts(res.data)
  })
  }, [])
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostItem post={item}></PostItem>}/>
    </View>
  )
}

export default Posts;