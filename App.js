/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/navigation/Router';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  console.log(process.env.REACT_NATIVE_APP_MAP_BOX_ACCESS_TOKEN);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router />
    </>
  );
};

export default App;
