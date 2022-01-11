import React from 'react';
import {Text, FlatList, View, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchResultList = ({data, navigate}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Pressable onPress={() => navigate('Guests')}>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={36} color="#222" />
            </View>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        </Pressable>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default SearchResultList;
