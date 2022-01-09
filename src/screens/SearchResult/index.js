import React from 'react';
import {View, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const SearchResultScreen = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchResultScreen;
