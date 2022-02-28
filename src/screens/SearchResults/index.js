import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, Alert} from 'react-native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import PackageTypes from '../../components/PackageTypes';
import RouteMap from '../../components/RouteMap';
import {createOrder} from '../../graphql/mutations';
import {useRoute, useNavigation} from '@react-navigation/native';
import {GOOGLE_MAPS_APIKEY} from '@env';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../../../slices/navSlice';



const SearchResults = props => {
  const typeState = useState(null);
  const dispatch = useDispatch();

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const route = useRoute();
  const navigation = useNavigation();

  //const {originPlace, destinationPlace} = route.params;
  //const {origin, destination} = route.params;

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
     fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
     .then(res => res.json())
     .then(data => {
         dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
   //console.warn(data)

     })
    };
    getTravelTime();
     }, [origin, destination, GOOGLE_MAPS_APIKEY]);

//   useEffect(() => {
//     if (!originPlace || !destinationPlace) return;
//     const getTravelTime = async () => {
//      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originPlace}&destinations=${destinationPlace}&key=${GOOGLE_MAPS_APIKEY}`)
//      .then(res => res.json())
//      .then(data => {
//          //dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
//    console.warn(data)

//      })
//     };

//     getTravelTime();
//   }, [originPlace, destinationPlace, GOOGLE_MAPS_APIKEY]);

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
        originLatitude: origin.location.lat,
        originLongitude: origin.location.lng,
        destinationLatitude: destination.location.lat,
        destinationLongitude: destination.location.lng,
        // originLatitude: originPlace.details.geometry.location.lat,
        // originLongitude: originPlace.details.geometry.location.lng,
        // destinationLatitude: destinationPlace.details.geometry.location.lat,
        // destinationLongitude: destinationPlace.details.geometry.location.lng,
        userId: userInfo.attributes.sub,
        packageId: '1',
        status: 'NEW',
      };
      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input: input,
        }),
      );
      //console.log(response)
      //Alert.alert("Success!","We have received your order.",[{text: "Go Home", onPress: () =>navigation.navigate('Home')}])

      navigation.navigate('OrderPage', {id: response.data.createOrder.id});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 450}}>
        <RouteMap origin={origin} destination={destination} />
        {/* <RouteMap origin={originPlace} destination={destinationPlace} /> */}
      </View>

      <View style={{height: 450}}>
        <PackageTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResults;
