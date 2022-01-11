import React from 'react';
import {Text, FlatList, View} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchResultList = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Entypo name="location-pin" size={36} color="#222" />
          </View>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default SearchResultList;
