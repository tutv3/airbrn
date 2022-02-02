import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
// import MapboxGL from '@react-native-mapbox-gl/maps';

// MapboxGL.setAccessToken(
//   'pk.eyJ1IjoidHV2YW50cmFuMTk5OCIsImEiOiJja3lrMjA2bHowOXBtMndwbmRpb3J5d3M4In0.FfDWj-1giV_qf3fli3jrqw',
// );

const PlaceMap = () => {
  return (
    <View>
      {/* <MapboxGL.MapView style={styles.map} /> */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://img.gadgethacks.com/img/60/25/63633755880541/0/7-best-new-features-for-maps-ios-11-for-iphone.w1456.jpg',
        }}
      />
    </View>
  );
};

export default PlaceMap;
