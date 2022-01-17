import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(process.env.REACT_NATIVE_APP_MAP_BOX_ACCESS_TOKEN);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

const PlaceMap = () => {
  return (
    <View>
      <MapboxGL.MapView style={styles.map} />
    </View>
  );
};

export default PlaceMap;
