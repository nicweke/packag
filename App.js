/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid,Platform} from 'react-native';

import DestinationSearch from './src/screens/DestinationSearch';
import Geolocation from '@react-native-community/geolocation';


navigator.geolocation = require('@react-native-community/geolocation');





const App: () => Node = () => {
  
  const androidPermission = async () =>  {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }

  }

  useEffect(() => {
    if (Platform.OS === 'android'){
      androidPermission();
    }
    else
    //IOS
    {
      Geolocation.requestAuthorization();
    }
    
  }, [])

  return (
    <>

    <StatusBar barStyle='dark-content' />
    <DestinationSearch/>

    </>
  );
};

   
export default App;
