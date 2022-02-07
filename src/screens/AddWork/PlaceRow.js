import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const PlaceRow = ({data}) => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                {data.description === 'Home' ? <MaterialIcons name='home' size={28} color={'#ffffff'} />
                : data.description === 'Workplace' ? <MaterialIcons name='work' size={28} color={'#ffffff'}/>
                : <MaterialIcons name='location-pin' size={28} color={'#ffffff'}/>}
                

            </View>
            <Text style={styles.locationText} style={{fontFamily:'Raleway-Bold', color: '#070600'}}>{data.description || data.vicinity}</Text>
        </View>
    );
};

export default PlaceRow;