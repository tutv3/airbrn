import React from 'react';
import {Bullets} from 'react-native-easy-content-loader';
import {View} from 'react-native';

const Placerholder = () => {
  return (
    <View
      style={{
        marginTop: 20,
      }}>
      <Bullets active listSize={5} aSize={50} />
    </View>
  );
};

export default Placerholder;
