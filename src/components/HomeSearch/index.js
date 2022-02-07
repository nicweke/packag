import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Feather from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import styles from './styles.js';

import {Auth, API, graphqlOperation} from 'aws-amplify';

import {getHome} from '../../graphql/queries.js';

import {getWork} from '../../graphql/queries.js';

import {useRoute} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeSearch = props => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };

  const [home, setHome] = useState(null);
  const [work, setWork] = useState(null);

  

  const addHome = () => {
    navigation.navigate('AddHome');
  };
  const addWork = () => {
    navigation.navigate('AddWork');
  };

  const route = useRoute();

  //fetch home details
  useEffect(() => {
    const fetchHome = async () => {
      try {
        const homeData = await API.graphql(
          graphqlOperation(getHome, {id: route.params.id}),
        );
        setHome(homeData.data.getHome);
      } catch (e) {
        console.error(e);
      }
    };
    fetchHome();
  }, []);

  //fetch work details
  useEffect(() => {
    const fetchWork = async () => {
      try {
        const workData = await API.graphql(
          graphqlOperation(getWork, {id: route.params.id}),
        );
        setWork(workData.data.getWork);

        //console.warn(workData);
      } catch (e) {
        console.error(e);
      }
    };

    fetchWork();
    
    
  }, []);

  



  const renderHome = () => {
    if (  home?.id != null && home?.id == home?.id ) { 
      return (
        <Pressable
          onPress={addHome}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Ionicons name="home" size={30} color={'#285981'} />
          </View>
          <Text style={{color: 'black', fontFamily: 'Raleway-Bold'}}>
            Update Home
          </Text>
        </Pressable>
      );
    }
    return (
      <Pressable
        onPress={addHome}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Ionicons name="home" size={30} color={'#285981'} />
        </View>
        <Text style={{color: 'black', fontFamily: 'Raleway-Bold'}}>
          Add Home
        </Text>
      </Pressable>
    );
  };


  const workRender = () => {
    if ( work?.id != null && work?.id === work?.id ) { 
      return (
        <Pressable
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={addWork}>
          <View>
            <Ionicons name="briefcase" size={30} color={'#285981'} />
          </View>
          <Text style={{color: 'black', fontFamily: 'Raleway-Bold'}}>
            Update Work
          </Text>
        </Pressable>
      );
    }
    return (
      <Pressable
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={addWork}>
          <View>
            <Ionicons name="briefcase" size={30} color={'#285981'} />
          </View>
          <Text style={{color: 'black', fontFamily: 'Raleway-Bold'}}>
            Add Work
          </Text>
        </Pressable>
    );
  };

  return (
    <View>
      {/* Input box*/}
      <Pressable style={styles.inputBox}>
        <Text style={styles.inputText}>Package Sending Options: </Text>
      </Pressable>

      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={goToSearch} //&& () => setSelected(!selected)
          elevation={5}
          style={{
            //flexDirection: 'column',
            backgroundColor: 'white',
            margin: 10,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            // alignItems: 'center',
            borderWidth: 1,
            borderRadius: 7,
            borderColor: '#cecece',
            marginTop: 2,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontFamily: 'Raleway-SemiBold',
            }}>
            <AntDesign name="rightcircle" size={15} />
            {'  '}
            My Current Location
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goToSearch} //&& () => setSelected(!selected)
          style={{
            //flexDirection: 'column',
            backgroundColor: 'white',
            margin: 10,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            // alignItems: 'center',
            borderWidth: 1,
            borderRadius: 7,
            borderColor: '#2667ff',
            marginTop: 1,
          }}>
          <Text
            style={{
              fontSize: 19,
              color: '#2667ff',
              fontFamily: 'Raleway-SemiBold',
            }}>
            <AntDesign name="leftcircle" size={18} />
            {'  '}
            Where to?
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 55,
        }}>
          <View>
          {renderHome()}
          </View>
          <View>
          {workRender()}
          </View>
        

        
      </View>
    </View>
  );
};

export default HomeSearch;
