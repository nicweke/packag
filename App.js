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

import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';

navigator.geolocation = require('@react-native-community/geolocation');



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
      
    </Provider>
  );
};

const customTheme = {...AmplifyTheme,
  button:{
    ...AmplifyTheme.button,
    backgroundColor:'#ffd60a',
    borderRadius:8,
    padding: 16,
    
  },
  buttonText: {
    ...AmplifyTheme.buttonText,
		color: '#070600',
    fontFamily: 'Raleway-Bold',
    fontSize: 16,
	},
  sectionHeaderText: {
    ...AmplifyTheme.sectionHeaderText,
    fontFamily: 'Raleway-Bold',
    textAlign: 'center',	
	},
  input: {
    ...AmplifyTheme.input,
    borderStyle:'solid',
    borderColor:'#070600',
    borderWidth:1,
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
    fontFamily: 'Raleway-Bold',
	},
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor:'#ffc300',
		borderRadius:8,
    padding: 16,
	},
  phoneInput: {
    ...AmplifyTheme.phoneInput,
    //borderWidth:1,
   // borderColor:'black',
    //backgroundColor:'black',
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderBottomWidth:0,
    fontFamily: 'Raleway-Bold',
    color:'white',
    fontSize: 16,	
	},
  phoneContainer: {
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderBottomWidth:0,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
    backgroundColor:'#003566',
    borderRadius: 4,
    fontFamily: 'Raleway-Bold',
    fontSize: 16, 
    //borderColor:'white',
    borderWidth:1,
	},
  signedOutMessage: {
    ...AmplifyTheme.signedOutMessage,
    fontFamily: 'Raleway-Bold',	
	},
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    fontSize: 14,
    fontFamily:'Raleway-Bold',
	},
  sectionFooterLinkDisabled: {
    ...AmplifyTheme.sectionFooterLinkDisabled,
    fontFamily:'Raleway-Bold', 
		fontSize: 16,
		
	},
  errorRowText: {
		marginLeft: 10,
    color:'black',
    fontFamily:'Raleway-Bold', 
	},
  

}

export default withAuthenticator(App, {theme: customTheme});
