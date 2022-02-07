import React, {useEffect} from 'react';

import { Platform } from 'react-native';

import  MapView, {Marker} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';
import { useRef, useCallback } from 'react';


const RouteMap = ({origin, destination}) => {

    // const initialRegion={{
    //     latitude:origin.details.geometry.location.lat,
    //     longitude:origin.details.geometry.location.lng,
    //     latitudeDelta: 0.0222,
    //     longitudeDelta: 0.0121,
    //     }}
    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
    };

    const destinationLoc = {
        latitude: destination.details.geometry.location.lat, 
        longitude: destination.details.geometry.location.lng,
    };

    const GOOGLE_MAPS_APIKEY = 'AIzaSyCnjJ4prvMRcfO4aDsgQIP490rDJdHnva0'; 


    const mapRef = useRef(null);

    useEffect(() => {
      if(!origin || !destination) return;

      //zoom and fit to the markers
      mapRef.current.fitToSuppliedMarkers(['origin','destination'], {
          edgePadding: {top:50, right:50, bottom:50, left:50},
      });
    }, [origin, destination])

    

    return (
    
        <MapView
            ref={mapRef}
            //ref={ref}
            style={{height:'100%', width:'100%'}}
            showsUserLocation={true}
            initialRegion={{
                latitude:origin.details.geometry.location.lat,
                longitude:origin.details.geometry.location.lng,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
                }}

                
            
          
        >
            <MapViewDirections
                origin={originLoc}
                destination={destinationLoc}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />  
            <Marker
            
            coordinate={originLoc}
            title={"Origin"}
            identifier='origin'
        
            />
            <Marker
            
            coordinate={destinationLoc}
            title={"Destination"}
            identifier='destination'
        
            />

        </MapView>
     
    );
};

export default RouteMap;








// import React, { useRef, useCallback } from 'react';
// import { Platform } from 'react-native';
// import MapView, { PROVIDER_GOOGLE, LatLng, Marker } from 'react-native-maps';

// type Props = {
//   origin: LatLng;
//   destination: LatLng;
// }

// export default function ({ origin, destination }: Props) {
//     const ref = useRef<MapView>(null);

//     // effects
//     const onMapReadyHandler = useCallback(() => {
//       if (Platform.OS === 'ios') {
//         ref?.current?.fitToElements(false);
//       } else {
//         ref?.current?.fitToCoordinates([origin, destination], {
//           animated: true,
//           edgePadding: {
//             top: 150,
//             right: 50,
//             bottom: 50,
//             left: 50,
//           },
//         });
//       }
//     }, [ref]);

//     // UI
//     return (
//       <MapView
//         style={{ width: '100%', height: '100%' }}
//         ref={ref}
//         provider={PROVIDER_GOOGLE}
//         onMapReady={onMapReadyHandler}
//       >
//         <Marker coordinate={origin} identifier="origin" />
//         <Marker coordinate={destination} identifier="destination" />
//       </MapView>
//     );
//   }
// );