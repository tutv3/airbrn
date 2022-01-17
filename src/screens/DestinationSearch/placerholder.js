import React from 'react';
import {Bullets} from 'react-native-easy-content-loader';
import {View} from 'react-native';

const Placerholder = () => {
  return (
    <View>
      <Bullets
        active
        listSize={5}
        aSize={50}
        tHeight={20}
        tWidth="100%"
        aShape="square"
        containerStyles={{
          paddingVertical: 11,
          borderBottomWidth: 1,
          borderColor: 'lightgray',
        }}
      />
    </View>
  );
};

export default Placerholder;
