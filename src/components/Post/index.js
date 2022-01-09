import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.rooms}>
        {post.bed} bed, {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.description}
      </Text>
      <View style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.currentPrice}>${post.newPrice} / night</Text>
      </View>
      <Text style={styles.total}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
