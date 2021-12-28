import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const PlaceRow = ({data}) => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <MaterialIcons name='location-pin' size={30} color={'#ffffff'}/>

            </View>
            <Text style={styles.locationText}>{data.description}</Text>
        </View>
    );
};

export default PlaceRow;