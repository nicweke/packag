import React from 'react';
import { View, Image, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';
import { selectTravelTimeInformation } from './../../../slices/navSlice';
import { useSelector } from 'react-redux';

const PackageTypeRow = (props) => {

    const {type, onPress, isSelected} = props;
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    const getImage = () => {
        if (type.type === 'General Package') {
          return require('../../assets/images/package.png');
        }
        if (type.type === 'High Value') {
          return require('../../assets/images/fragile.png');
        }
        return require('../../assets/images/quick.png');
      }

    //Incase of surge pricing, the value increases
    const SURGE_PRICE = 1.5
    return (
        <Pressable 
        onPress={onPress} 
        style={[styles.container, 
            {backgroundColor: isSelected ? "#dfdfdf" : "white"}]}
        >
            {/* IMage */}
            <Image style={styles.image} source={getImage()} />  
            {/* source={require('../../assets/package.png')} */}

            <View style={styles.middleContainer}>
                
                <Text style={styles.type}>{type.type}</Text>
                <Text style={styles.time}>Delivery Time:{"\n"} {travelTimeInformation?.duration.text}</Text>
            </View>

            <View style={styles.rightContainer}>
                <Ionicons name='pricetag' size={16} color={'#ffd60a'} />
                <Text style={styles.price}>
                    {/* est. KES  {type.price}*/}

                    {new Intl.NumberFormat('en-gb', {
                        style: 'currency',
                        currency:'KES'
                    }).format(
                        (travelTimeInformation?.duration.value * SURGE_PRICE * type.multiplier) /100
                    )}
                </Text>
            </View>


        </Pressable>
    );
};

export default PackageTypeRow;