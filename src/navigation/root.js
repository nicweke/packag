import React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeNavigator from './HomeNav';
import styles from './../screens/DestinationSearch/styles';
import CustomDrawer from './CustomDrawer';
import { FadeOut } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Drawer = createDrawerNavigator();


const DummyScreen = (props) => (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <Text>{props.name}</Text>
    </View>
)

const RootNavigator = (props) => {
    
    return (
        
        <NavigationContainer >
            
            <Drawer.Navigator 

            screenOptions={{ 
               headerShown:false,
               headerTransparent: true,
               headerTitle: "",
               drawerLabelStyle:{marginLeft:-22, fontFamily: "Raleway-Bold",fontSize:15},
               drawerActiveBackgroundColor:'#003566',
               drawerActiveTintColor:'#ffffff',
               drawerInactiveTintColor:'#333'
             //headerStyle: {height:70},
            
             
             

              


            }}
            
            drawerContent={
                (props)=>
                (<CustomDrawer {...props} />)
                }>
                <Drawer.Screen  name="Home" component={HomeNavigator} options={{
                    drawerIcon: ({color})=>(
                        <Ionicons name="home-outline" size={22} color={color} />
                    )
                }}
               
                
                />

                <Drawer.Screen name="Your Trips" options={{
                    drawerIcon: ({color})=>(
                        <Ionicons name="briefcase-outline" size={22} color={color} />
                    )
                }}>
                    {() => <DummyScreen name={"Your Trips"} /> }
                </Drawer.Screen>

                <Drawer.Screen name="Help" options={{
                    drawerIcon: ({color})=>(
                        <Ionicons name="help-outline" size={22} color={color} />
                    )
                }}>
                    {() => <DummyScreen name={"Help"}/> }
                </Drawer.Screen>

                <Drawer.Screen name="Wallet" options={{
                    drawerIcon: ({color})=>(
                        <Ionicons name="wallet-outline" size={22} color={color} />
                    )
                }}>
                    {() => <DummyScreen name={"Wallet"}/>}
                </Drawer.Screen>

                <Drawer.Screen name="Settings" options={{
                    drawerIcon: ({color})=>(
                        <Ionicons name="settings-outline" size={22} color={color} />
                    )
                }}>
                    {() =><DummyScreen name={"Settings"}/>}
                </Drawer.Screen>

                
            </Drawer.Navigator>

        </NavigationContainer>
        
    );
};

export default RootNavigator;

