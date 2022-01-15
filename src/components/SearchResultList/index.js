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
            <Text style={styles.desc}>{item.properties.address_line1}</Text>
          </View>
        </Pressable>
      )}
      keyExtractor={item => item.properties.place_id}
    />
  );
};

export default SearchResultList;
