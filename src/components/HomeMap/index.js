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
import {Geolocation} from '@react-native-community/geolocation';


// constructor(props) {
//   super(props);

//   this.state = {
//     latitude: null,
//     longitude: null,
//     error:null,
//   };
// }

// componentDidMount() {
//   navigator.geolocation.getCurrentPosition(
//      (position) => {
//        console.log("wokeeey");
//        console.log(position);
//        this.setState({
//          latitude: position.coords.latitude,
//          longitude: position.coords.longitude,
//          error: null,
//        });
//      },
//      (error) => this.setState({ error: error.message }),
//      { enableHighAccuracy: false, timeout: 200000 },
//    );
//  }

const HomeMap = () => {
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
      //ref={mapRef}
      style={{height: '100%', width: '100%'}}
      showsUserLocation={true}
      showsCompass={false}
      initialRegion={{
        latitude: 28.450927,
        longitude: -16.260845,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
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
