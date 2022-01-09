import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://a0.muscache.com/im/pictures/297d772b-cabf-4567-896b-ce90e9f30988.jpg?im_w=1440',
        }}
      />
      <Text style={styles.rooms}>1 bed, 1 bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea
        accusamus porro ratione id. Perferendis maxime commodi incidunt
        excepturi rem.
      </Text>
      <View style={styles.prices}>
        <Text style={styles.oldPrice}>$43</Text>
        <Text style={styles.currentPrice}>$36 / night</Text>
      </View>
      <Text style={styles.total}>$243 total</Text>
    </View>
  );
};

export default Post;
