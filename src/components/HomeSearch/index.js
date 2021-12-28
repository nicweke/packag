import React from 'react';
import {View, Text} from 'react-native'


import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles.js';


const HomeSearch = (props) => {
    return (
        <View>
            

            {/* Input box*/}
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Destination: </Text>
                <View style={styles.timeContainer}>
                    <AntDesign name='clockcircle'size={16} color={'#285981'}/>
                    <Text>Now</Text>
                    <MaterialIcons name='keyboard-arrow-down' size={16} color={'#285981'}/>

                </View>

            </View>

            {/* Previous destination*/}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name='page-previous-outline' size={30} color={'#285981'} />
                </View>
                <Text style={styles.destinationText}>Kariobangi</Text>

            </View>


            {/* Home destination*/}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                <AntDesign name='home'size={30} color={'#285981'}/>
                </View>
                <Text style={styles.destinationText}>Home</Text>

            </View>
        


            
        </View>
    );
};

export default HomeSearch;