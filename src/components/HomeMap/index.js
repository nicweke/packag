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
  let mapRef = useRef(null);

//   const region = {
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
// }

// const getCurrentLocation = async () => {
//   navigator.geolocation.getCurrentPosition(
//       position => {
//       let region = {
//               latitude: parseFloat(position.coords.latitude),
//               longitude: parseFloat(position.coords.longitude),
//               latitudeDelta: 5,
//               longitudeDelta: 5
//           };
//           await this.setState({
//               initialRegion: region
//           });
//       },
//       error => console.log(error),
//       {
//           enableHighAccuracy: true,
//           timeout: 20000,
//           maximumAge: 1000
//       }
//   );
// }

// useEffect(() => {
//   getCurrentLocation();

// }, [])





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
      initialRegion={{
        latitude: 28.450727,
        longitude: -16.260845,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
      >
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
