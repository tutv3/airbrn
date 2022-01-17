import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResult from '../screens/SearchResult';
import PlaceMap from '../components/PlaceMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNav = () => {
  console.log(process.env.REACT_NATIVE_APP_MAP_BOX_ACCESS_TOKEN);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name="list" component={SearchResult} />
      <Tab.Screen name="map" component={PlaceMap} />
    </Tab.Navigator>
  );
};

export default SearchResultTabNav;
