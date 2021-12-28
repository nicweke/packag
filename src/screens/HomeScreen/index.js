import React from 'react';
import { View, Text,Dimensions } from "react-native";
import HomeMap from '../../components/HomeMap';
import WelcomeMessage from '../../components/WelcomeMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
    return (
        <View>
            <View style={{height: Dimensions.get('window').height - 400 }}>
                <HomeMap />
            </View>
            
            
           {/*Welcome Message */}
           <WelcomeMessage />


           {/*Bottom Componnet */}
           <HomeSearch />
        </View>
    );
};

export default HomeScreen;