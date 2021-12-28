import React from 'react';

import  MapView, {Marker} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';


const RouteMap = (props) => {

    const origin = {
        latitude:28.450627,
        longitude:-16.263045,

    };
    const destination = {
        latitude:28.450127,
        longitude:-16.267045,

    };

    const GOOGLE_MAPS_APIKEY = 'AIzaSyCnjJ4prvMRcfO4aDsgQIP490rDJdHnva0'; 

    return (
    
        <MapView
            style={{height:'100%', width:'100%'}}
            
            initialRegion={{
            latitude:28.450627,
            longitude:-16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="black"
            />  
            <Marker
            
            coordinate={origin}
            title={"Origin"}
        
            />
            <Marker
            
            coordinate={destination}
            title={"Destination"}
        
            />

        </MapView>
     
    );
};

export default RouteMap;