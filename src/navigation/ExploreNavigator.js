import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import SearchResultTabNav from './SearchResultTabNav';

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResultTabNav}
        options={{
          title: 'Search our destinations',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
