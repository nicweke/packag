/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, {useEffect} from 'react';

import {
  StatusBar,
  SafeAreaView,
  useColorScheme,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Provider} from 'react-redux';

import DestinationSearch from './src/screens/DestinationSearch';
import Geolocation from '@react-native-community/geolocation';

import Router from './src/navigation/root.js';

import {withAuthenticator} from 'aws-amplify-react-native';

navigator.geolocation = require('@react-native-community/geolocation');

import Toast from 'react-native-toast-message';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import {store} from './store';

Amplify.configure(config);

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Packages Location Permission',
          message:
            'Packages needs access to your location ' +
            'so you can send and receive packages easily.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    }
    //IOS
    else {
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <Router />
        
      </>
      <Toast />
    </Provider>
  );
};

export default withAuthenticator(App);
