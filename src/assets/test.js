import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Platform, ScrollView, ActivityIndicator } from 'react-native';
import { DateMenu, Dropdown, DropdownTextInput, InputField} from '../../../GlobalReusableComponents/TextFields';
import { Space } from '../../../GlobalReusableComponents/Separators';
import { Button } from 'react-native-elements';
import axios from 'axios';
import MapView, { Marker } from 'react-native-maps';
import useReverseGeocoding from '../../../context/useReverseGeocoding';
import useCurrentLocation from '../../../context/useCurrentLocation';
import { getLocationAsync } from '../../../util/getCurrentLocation';
import { textStyles, buttonStyles } from '../../../globalStyles/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

const latitudeDelta = 0.025
const longitudeDelta = 0.025

const JobLocationScreen = (props) => {
    const [region, setRegion] = useState({
        latitude: 38.907192,
        longitude: -30.036871,
        latitudeDelta,
        longitudeDelta
    });
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [reverseGeocodingApi, reverseGeocodingdata, isReverseGeacodingDone, reverseGeocodingErrorMessage] = useReverseGeocoding();
    let mapRef = useRef(null);

    useEffect(() => {
        getYourCurrentLocation();
    },
    [])

    useEffect(() => {
        animateToRegion();
    },
    [region])

    const onMapReady = () => {
        if(!isMapReady) {
            setIsMapReady(true);
        }
    };

    const getYourCurrentLocation = async () => {
        const { location } = await getLocationAsync();
        console.log(location);
        setRegion(region);
    }

    const onRegionChangeComplete = (selectedRegion) => {
        setRegion(selectedRegion);
        reverseGeocodingApi(selectedRegion);
    }

    const animateToRegion = () => {
        mapRef.animateToRegion(region, 1000);
    }

    const onNextButtonPress = () => {
        props.navigation.state.params.setSelectedValue(jobTags);
        props.navigation.pop();
    }

    const _renderMapWithFixedMarker = () => {
        return (
            <View style={{flex: 1}}>
                <MapView
                    ref={ref => {
                        mapRef = ref
                    }}
                    onMapReady={onMapReady}
                    style={styles.map}
                    initialRegion={region}
                    onRegionChangeComplete={(selectedRegion) => onRegionChangeComplete(selectedRegion)}
                />
                <View style={styles.pinBadge}>
                    <Text
                        style={{color: EStyleSheet.value('$primaryDarkGray')}}
                    >
                        Move to choose Location
                    </Text>
                </View>
                <View style={styles.markerFixed}>
                    <Image style={styles.marker} source={require('../../../assets/pin.png')} />
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View 
                pointerEvents='none'
                style={styles.inputFieldContainer}
            >
                <InputField
                    maxLength={35}
                    placeholder='Selected Address'
                    value={isReverseGeacodingDone? reverseGeocodingdata.results[0].formatted_address : 'Loading ...'}
                />
            </View>
            {_renderMapWithFixedMarker()}
            <View style={styles.bodyContainer}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Confirm Your Location"
                        buttonStyle={buttonStyles.button}
                        onPress={() => onNextButtonPress()}
                    />
                </View>
            </View>
        </View>
    );
}

JobLocationScreen.navigationOptions = ({navigation}) => {
    return {
        title: 'Select your Location'
    }; 
};

export default JobLocationScreen;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$primaryBackgroundColor'
    },
    inputFieldContainer: {
        backgroundColor: '#f8f9f9', 
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    map: {
        flex: 1
    },
    pinBadge: {
        position: 'absolute',
        paddingVertical: 10,
        paddingHorizontal: 15,
        top: '38%',
        alignSelf: 'center',
        borderRadius: 25,
        backgroundColor: '#ffffff',
        shadowColor: '#acaeb4',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,

        elevation: 5
    },
    markerFixed: {
        left: '50%',
        marginLeft: -10,
        marginTop: -6,
        position: 'absolute',
        top: '50%'
    },
    marker: {
        width: 20, 
        height: 41
    },
    bodyContainer: {
        marginHorizontal: 20
    },
    buttonContainer: {
        position: 'absolute', 
        bottom: 20,
        width: '100%'
    }
})




// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';

//import all the components we are going to use.
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setCurrentLongitude(currentLongitude);
        //Setting state Longitude to re re-render the Longitude Text
        setCurrentLatitude(currentLatitude);
        //Setting state Latitude to re re-render the Longitude Text
      },
      (error) => {
        setLocationStatus(error.message);
      },
      { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLocationStatus('You are Here');
        //Will give you the location on location change
        console.log(position);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setCurrentLongitude(currentLongitude);
        //Setting state Longitude to re re-render the Longitude Text
        setCurrentLatitude(currentLatitude);
        //Setting state Latitude to re re-render the Longitude Text
      },
      (error) => {
        setLocationStatus(error.message);
      },
      { enableHighAccuracy: false, maximumAge: 1000 }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={styles.boldText}>{locationStatus}</Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Longitude: {currentLongitude}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Latitude: {currentLatitude}
          </Text>
          <View style={{ marginTop: 20 }}>
            <Button title="Button" onPress={getOneTimeLocation} />
          </View>
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          React Native Geolocation
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
  },
});

export default App;
