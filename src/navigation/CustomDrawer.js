import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import UserAvatar from 'react-native-user-avatar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {getUser} from '../graphql/queries';
//import {Auth,API,graphqlOperation} from 'aws-amplify';

const CustomDrawer = props => {
  //const [user, setUser] = useState(null);
  //const route = useRoute();
  //fetch user details

  // useEffect(() => {
  //   const userInfo = async()=>{
  //     let authenticatedUser = await Auth.currentAuthenticatedUser({bypassCache:true})
  //     const username = authenticatedUser.username
  //     //return username;

  //     console.warn( username );

  //   }

  //  userInfo();
  // }, []);

  const setUser = async () => {
    let authenticatedUser = await Auth.currentAuthenticatedUser({bypassCache:true})
    const username = authenticatedUser.username
    return username
    // try {
    //   if(username != null)
    //   {
    //     <Text>Paul</Text>
    //   }
    //   else{
    //     return;
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  };

  // const userInfo = async () => {
  //   let user = await Auth.currentAuthenticatedUser();
  //   const {attributes} = user;
  // };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <ImageBackground style={{padding: 20, marginTop: 20}}>
          <View
            style={{
              backgroundColor: '#00A6FB',
              height: 50,
              width: 50,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Raleway-Bold',
                fontSize: 20,
              }}>
              N
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontFamily: 'Raleway-Bold',
              left: 65,
              bottom: 40,
            }}>{`${setUser()}`}</Text>

          {/* <TouchableOpacity onPress={getUserName} style={{paddingVertical:15,}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name="exit-outline" size={25}  color={'#003566'}/>  
                        <Text style={{ fontFamily:"Raleway-Bold", color: '#003566', left:8, fontSize:25,paddingBottom:5}}>{getUsername}</Text>
                    </View>
                </TouchableOpacity> */}
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{padding: 20}}>
        <Pressable
          onPress={() => {
            Auth.signOut();
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={25} color={'#003566'} />
            <Text
              style={{
                fontFamily: 'Raleway-Bold',
                color: '#003566',
                left: 8,
                fontSize: 25,
                paddingBottom: 5,
              }}>
              Logout
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomDrawer;
