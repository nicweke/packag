import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';

import PlaceRow from './PlaceRow.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createWork } from '../../graphql/mutations.js';



const AddWork = props => {
  const navigation = useNavigation();
  
  const [workPlace, setWorkPlace] = useState(null);

  const goToHome = () => {
    navigation.navigate('Home');
  };

  


  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Work Location Added  👋',
      text2: 'You will be redirected shortly'
    });
  }


const newWork = async() =>{
  if(!workPlace){
    return;

  }
  //submit to server
  try {

    const userInfo = await Auth.currentAuthenticatedUser();
    //const date = new Date();
    const input = {
      latitude: workPlace.details.geometry.location.lat,
      longitude: workPlace.details.geometry.location.lng,
      userId:userInfo.attributes.sub,
      
    }
    const response = await API.graphql(
      graphqlOperation(
        createWork, {
          input:input
        }
      )
    )

    navigation.navigate('Home', { id:response.data.createWork.id })
    //Alert.alert("Success!","We have received your order.",[{text: "Go Home", onPress: () =>checkNavigation()}])
     // showToast() =>checkNavigation();
    

    
  } catch (e) {
    console.error(e);
    
  }

};


  useEffect(() => {
    newWork();
  }, [workPlace]);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={goToHome}
        style={{
          paddingTop: 15,
          flexDirection: 'row',
          marginHorizontal: 25,
          marginBottom: 2,
          alignItems: 'center',
        }}>
        <AntDesign name="back" color={'black'} size={25} />
        <Text style={{color: 'black', padding: 3, fontFamily: 'Raleway-Bold'}}>
          Back
        </Text>
      </TouchableOpacity>

      <View>
        <View style={styles.container}>
          <GooglePlacesAutocomplete
            placeholder="Enter Work Location"
            onPress={(data, details = null) => {
              setWorkPlace({data, details}, newWork,showToast);
              //() => { this.functionOne(); this.functionTwo(); }
            }}
            enablePoweredByContainer={false}
            minLength={2}
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            textInputProps={{placeholderTextColor: 'white'}}
            suppressDefaultStyles
            styles={{
              textInput: {
                backgroundColor: '#2667ff',
                marginVertical: 5,
                borderRadius: 5,
                padding: 10,
                marginLeft: 15,
                fontFamily: 'Raleway-Bold',
                color: 'white',
                borderColor: '#2667ff',
              },
              container: {
                ...styles.autocompleteContainer,
                top: 20,
              },
              separator: styles.separator,
            }}
            fetchDetails
            query={{
              key: 'AIzaSyCnjJ4prvMRcfO4aDsgQIP490rDJdHnva0',
              language: 'en',
            }}
            renderRow={data => <PlaceRow data={data} />}
            
          />
        
        </View>

        
      </View>
    </SafeAreaView>
  );
};

export default AddWork;
