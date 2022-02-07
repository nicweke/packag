import React from 'react';
import { View, Image, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

const PackageTypeRow = (props) => {

    const {type, onPress, isSelected} = props;
    return (
        <Pressable 
        onPress={onPress} 
        style={[styles.container, 
            {backgroundColor: isSelected ? "#dfdfdf" : "white"}]}
        >
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


        </Pressable>
    );
};

export default PackageTypeRow;