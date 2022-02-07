import React from 'react';
import {View, Text, Pressable} from 'react-native';
import PackageTypeRow from '../PackageTypeRow/index.js';
import typesData from '../../assets/types.js';
import styles from './styles.js';


const PackageTypes = ({ typeState, onSubmit }) => {

    const [selectedType, setSelectedType] = typeState;

    


    return (
        <View>
            {typesData.map(type=> <PackageTypeRow 
            type={type}
             key={type.id}
             isSelected={type.type === selectedType}
             onPress={() => setSelectedType(type.type)}
             />)}

            <Pressable onPress={onSubmit} style={{
                
                backgroundColor:'#ffd60a',
                padding: 15,
                margin: 10,
                alignItems:'center',
               
                borderRadius:5,
                
                }}>
                <Text style={{color:'#000000', fontSize: 18, fontFamily:'Raleway-Bold'}}>Confirm Package</Text>
            </Pressable>
            
            
            
        </View>
    );
};

export default PackageTypes;