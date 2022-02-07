import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import AddHome from '../screens/AddHome';
import AddWork from '../screens/AddWork';

import OrderScreen from '../screens/OrderScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = props => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,

      }}
    >
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
      />
      <Stack.Screen name={'DestinationSearch'} component={DestinationSearch} />
      <Stack.Screen name={'AddHome'} component={AddHome} />
      <Stack.Screen name={'AddWork'} component={AddWork} />
      <Stack.Screen name={'SearchResults'} component={SearchResults} />
      <Stack.Screen name={'OrderPage'} component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
