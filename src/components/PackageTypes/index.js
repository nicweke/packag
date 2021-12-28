import React from 'react';
import {View, Text, Pressable} from 'react-native';
import PackageTypeRow from '../PackageTypeRow/index.js';
import typesData from '../../assets/types.js';
import styles from './styles.js';


const PackageTypes = (props) => {
    const confirm = () => {
        console.warn('confirm');
    };
    return (
        <View>
            {typesData.map(type=> <PackageTypeRow type={type}/>)}

            <Pressable onPress={confirm} style={{
                
                backgroundColor:'#ffd60a',
                padding: 15,
                margin: 10,
                alignItems:'center',
               
                borderRadius:5,
                
                }}>
                <Text style={{color:'#000000', fontWeight:"900", fontSize: 18,}}>Confirm Package</Text>
            </Pressable>
            
            
            
        </View>
    );
};

export default PackageTypes;