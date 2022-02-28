import { Image, Text, View } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import {API, graphqlOperation} from 'aws-amplify';
import {listPackages} from '../../graphql/queries';


// const LATITUDE_DELTA = 0.01;
// const LONGITUDE_DELTA = 0.01;

 
// const latitudeDelta: 0.0222,
// const longitudeDelta: 0.0121,

const initialRegion = {
  latitude: 28.450727,
  longitude: -16.260845,
  latitudeDelta: 0.0222,
  longitudeDelta: 0.0121,
}

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

export default class HomeMap2 extends Component {

    map = null;

    state = {
      region: {
    latitude: 28.450727,
  longitude: -16.260845,
  latitudeDelta: 0.0222,
  longitudeDelta: 0.0121,
      },
      ready: true,
      filteredMarkers: []
    };

    if(this.state.ready) {
        setTimeout(() => this.map.animateToRegion(region), 10);;
      }
      //this.setState({ region });
    }
  
    componentDidMount() {
      console.log('Component did mount');
      this.getCurrentPosition();
    }

    getCurrentPosition() {
        try {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              };
              this.setRegion(region);
            },
           
          );
        } catch(e) {
          console.error(e);
        }
      };

      onMapReady = (e) => {
        if(!this.state.ready) {
          this.setState({ready: true});
        }
      };
    
      onRegionChange = (region) => {
        console.log('onRegionChange', region);
      };
    
      onRegionChangeComplete = (region) => {
        console.log('onRegionChangeComplete', region);
      };



  render() {
    const { region } = this.state;
    const { children, renderMarker, markers } = this.props;


    return (
      <MapView 
      showsUserLocation={true}
      ref={ map => { this.map = map }}
      renderMarker={renderMarker}
      onMapReady={this.onMapReady}
      showsMyLocationButton={false}
        onRegionChange={this.onRegionChange}
        onRegionChangeComplete={this.onRegionChangeComplete}
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
    )
  }
}