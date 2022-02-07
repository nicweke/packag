import React from 'react';
import {View, Text, Pressable} from 'react-native';
//import Fontisto from 'react-native-vector-icons/Fontisto';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DrawerButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={{
        backgroundColor: 'black',
        borderRadius: 20,
        width: 40,
        height: 40,
        position: 'absolute',
        left: 10,
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MaterialIcons name="menu" color={'white'} size={25} />
    </Pressable>
  );
};

export default DrawerButton;
