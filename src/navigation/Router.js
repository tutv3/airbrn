import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GuestsScreen from '../screens/Guests';
import HomeScreen from '../screens/Home';
import SearchResultScreen from '../screens/SearchResult';
import DestinationSearchScreen from '../screens/DestinationSearch';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{
            title: 'How many people',
          }}
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchResultScreen}
          options={{
            title: 'Search our destinations',
          }}
        />
        <Stack.Screen
          name="DestinationSearch"
          component={DestinationSearchScreen}
          options={{
            title: 'Our destinations',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
