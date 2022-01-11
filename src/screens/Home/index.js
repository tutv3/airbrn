import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchBtn}
        onPress={() => navigation.navigate('DestinationSearch')}>
        <Fontisto name="search" size={20} color="#f15454" />
        <Text style={styles.btnTextSearch}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.bgImage}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('SearchResult')}>
          <Text style={styles.btnText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
