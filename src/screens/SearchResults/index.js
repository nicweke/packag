import React, { useState } from 'react';
import {View, Text, Dimensions, Alert} from 'react-native';
import { API, graphqlOperation, Auth} from 'aws-amplify';
import PackageTypes from '../../components/PackageTypes';
import RouteMap from '../../components/RouteMap';

import { createOrder } from '../../graphql/mutations';
import { useRoute, useNavigation } from '@react-navigation/native';
//import { type } from './../../../amplify/backend/types/amplify-dependent-resources-ref.d';


const SearchResults = (props) => {

    const typeState = useState(null);

    const route = useRoute();
    const navigation = useNavigation();

    const {originPlace, destinationPlace} = route.params

    const onSubmit = async () => {
        const [type] = typeState;
        if (!type) {
            return;
        }

        //submit to server
        try {

            const userInfo = await Auth.currentAuthenticatedUser();
            const date = new Date();
            const input = {
                createdAt: date.toISOString(),
                type,
                originLatitude:originPlace.details.geometry.location.lat,
                originLongitude:originPlace.details.geometry.location.lng,
                destinationLatitude:destinationPlace.details.geometry.location.lat,
                destinationLongitude:destinationPlace.details.geometry.location.lng,
                userId:userInfo.attributes.sub,
                packageId: "1",
                status: "NEW",
            }
            const response = await API.graphql(
                graphqlOperation(
                    createOrder, {
                        input:input
                    }
                )
            )
            //console.log(response)
            //Alert.alert("Success!","We have received your order.",[{text: "Go Home", onPress: () =>navigation.navigate('Home')}])

            navigation.navigate('OrderPage', { id:response.data.createOrder.id })
        } catch (e) {
            console.error(e);
        }


    }

    return (
        <View style={{display: 'flex', justifyContent:'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 450 }}>
                
                <RouteMap origin={originPlace} destination={destinationPlace}/>
            </View>
            
            <View style={{height:450}}>
                <PackageTypes typeState={typeState} onSubmit={onSubmit}/>    
            </View>
            
            
        </View>
    );
};

export default SearchResults;