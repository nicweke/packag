import React, {useState, useEffect} from 'react';
import { View, TextInput, SafeAreaView, Pressable, Text, TouchableOpacity } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import {LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';
import PlaceRow from './PlaceRow.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GOOGLE_MAPS_APIKEY } from '@env';


import styles from './styles.js';


const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Workplace',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const DestinationSearch = props => {
  const navigation = useNavigation();
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={goToHome} style={{paddingTop:15, flexDirection:'row', marginHorizontal:25, marginBottom:2, alignItems:'center'}}>
        <AntDesign name='back' color={'black'} size={25}/>
        <Text style={{color:'black', padding:3, fontFamily:'Raleway-Bold'}}>Back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Package From"
          onPress={(data, details = null) => {
            setOriginPlace({data, details}, checkNavigation);
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          nearbyPlacesAPI='GooglePlacesSearch'
          minLength={2}
          debounce={400}
          currentLocationLabel="Current Location"
          textInputProps={{ placeholderTextColor: 'black' }}
          styles={{
            textInput: styles.textInput,

            
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Package To"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details}, checkNavigation);
          }}
          enablePoweredByContainer={false}
          minLength={2}
          debounce={400}
          nearbyPlacesAPI='GooglePlacesSearch'
          textInputProps={{ placeholderTextColor: 'white' }}
          suppressDefaultStyles
          styles={{
            textInput: {

              backgroundColor:'#2667ff',
              marginVertical: 5,
              borderRadius: 5,
              padding: 10,
              marginLeft: 15,
              fontFamily:'Raleway-Bold',
              color:'white',
              borderColor: '#2667ff'
              
              
              
      
          },
            container: {
              ...styles.autocompleteContainer,
              top: 65,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />

        {/*Circle near package from text box */}
        <View style={styles.circle}></View>

        {/*Line connecting he two */}
        <View style={styles.line}></View>

        {/*square near package to text box */}
        <View style={styles.square}></View>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
