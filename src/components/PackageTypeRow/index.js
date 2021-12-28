import React from 'react';
import { View, Image, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

const PackageTypeRow = (props) => {

    const {type} = props;
    return (
        <View style={styles.container}>
            {/* IMage */}
            <Image style={styles.image} source={require('../../assets/package.png')} />

            <View style={styles.middleContainer}>
                
                <Text style={styles.type}>{type.type}</Text>
                <Text style={styles.time}>8.03pm drop off</Text>
            </View>

            <View style={styles.rightContainer}>
                <Ionicons name='pricetag' size={18} color={'#ffd60a'} />
                <Text style={styles.price}>est. KES {type.price}</Text>
            </View>


        </View>
    );
};

export default PackageTypeRow;