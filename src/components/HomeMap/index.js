import React, {useState, useEffect} from 'react';
import {View, Image, FlatList, Pressable} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {API, graphqlOperation} from 'aws-amplify';
import {listPackages} from '../../graphql/queries';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useRef} from 'react';

//import packages from '../../assets/packages.js';
import {selectOrigin} from './../../../slices/navSlice';
import {useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

const HomeMap = () => {
  // const latitudeDelta: 0.0222,
  // const longitudeDelta: 0.0121,

  const latitudeDelta = 0.0222;
  const longitudeDelta = 0.0121;

  const [position, setPosition] = useState({
    latitude: 28.450727,
    longitude: -16.260845,
    latitudeDelta,
    longitudeDelta,
  });

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  let mapRef = useRef(null);

  useEffect(() => {
    getOneTimeLocation();
  }, []);


  

  useEffect(() => {
    animateToRegion();
  }, [position]);

  // const onMapReady = () => {
  //   if (!isMapReady) {
  //     setIsMapReady(true);
  //   }
  // };

  // const getYourCurrentLocation = async () => {
  //   const { location } = await getLocationAsync();
  //   console.log(location);
  //   setPosition(region);
  // }

  const animateToRegion = () => {
    mapRef.animateToRegion(position, 1000);
  };

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        const longitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const latitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setLongitude(longitude);
        //Setting state Longitude to re re-render the Longitude Text
        setLatitude(latitude);
        //Setting state Latitude to re re-render the Longitude Text
      },

      {enableHighAccuracy: false, timeout: 30000, maximumAge: 1000},
    );
    
  };
  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLocationStatus('You are Here');
        //Will give you the location on location change
        console.warn(position);
        const longitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const latitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setLongitude(longitude);
        //Setting state Longitude to re re-render the Longitude Text
        setLatitude(latitude);
        //Setting state Latitude to re re-render the Longitude Text
      },
      
      { enableHighAccuracy: false, maximumAge: 1000 }
    );
  };

 
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listPackages));

        setPackages(response.data.listPackages.items);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPackages();
  }, []);

  return (
    <MapView
      ref={ref => {
        mapRef = ref;
      }}
      
      style={{height: '100%', width: '100%'}}
      showsUserLocation={true}
      showsCompass={false}
      initialRegion={position}>
      {packages.map(pack => (
        <Marker
          key={pack.id}
          coordinate={{latitude: pack.latitude, longitude: pack.longitude}}>
          <Image
            style={{
              height: 50,
              width: 50,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${pack.heading}deg`,
                },
              ],
            }}
            source={require('../../assets/package.png')}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
