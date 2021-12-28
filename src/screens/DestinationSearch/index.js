import React, {useState, useEffect} from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import PlaceRow from './PlaceRow.js';

import styles from './styles.js';


const DestinationSearch = (props) => {
   
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);



    useEffect(() => {
        console.warn('useEffect is called');
                          
        if (originPlace && destinationPlace)  {
            console.warn('Redirect to results');
        }
    }, [originPlace, destinationPlace])





    return (

        <SafeAreaView>
        <View style={styles.container}>


     


    <GooglePlacesAutocomplete
      placeholder='Package From'
      onPress={(data, details = null) => {
        setOriginPlace({data, details});
      }}
      enablePoweredByContainer={false}
      suppressDefaultStyles
      styles={{
        textInput: styles.textInput,
        container:styles.autocompleteContainer,
        listView:styles.listView,
        separator:styles.separator,
    }}
    fetchDetails
      query={{
        key: 'AIzaSyCnjJ4prvMRcfO4aDsgQIP490rDJdHnva0',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} />}
    />




<GooglePlacesAutocomplete
      placeholder='Package To'
      onPress={(data, details = null) => {
        setDestinationPlace({data, details});
      }}
      enablePoweredByContainer={false}
      suppressDefaultStyles
      styles={{
        textInput: styles.textInput,
        container:{
          ...styles.autocompleteContainer,
          top:65,
        },
        separator:styles.separator,
        
    }}
    fetchDetails
      query={{
        key: 'AIzaSyCnjJ4prvMRcfO4aDsgQIP490rDJdHnva0',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} />}
    />

    {/*Circle near package from text box */}
    <View style={styles.circle}>

    </View>

      {/*Line connecting he two */}
      <View style={styles.line}>
      
      </View>


    {/*square near package to text box */}
    <View style={styles.square}>
      
    </View>
            

            
        </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;