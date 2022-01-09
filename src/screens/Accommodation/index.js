import React from 'react';
import {ScrollView, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const Accommodation = () => {
  return (
    <ScrollView>
      {feed.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

export default Accommodation;
