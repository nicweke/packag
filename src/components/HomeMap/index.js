import React from 'react';
import { Image, FlatList } from "react-native";
import  MapView, {Marker} from 'react-native-maps';

import packages from '../../assets/packages.js';


const HomeMap = (props) => {
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

            {packages.map((pack) => (
                <Marker
                        key={pack.id}
                        coordinate={{ latitude : pack.latitude , longitude : pack.longitude }}        
                >
                    <Image style={{
                        height:65, 
                        width:65,
                        resizeMode:'contain',
                        transform:[{
                            rotate:`${pack.heading}deg`
                        }]
                        }} 
                        source={require('../../assets/package.png')}/>
                    

                </Marker>

            ))}

            
        
        
          

        </MapView>
     
    );
};

export default HomeMap;