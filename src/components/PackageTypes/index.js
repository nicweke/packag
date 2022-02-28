import React from 'react';
import {View, Text, Pressable} from 'react-native';
import PackageTypeRow from '../PackageTypeRow/index.js';
import typesData from '../../assets/types.js';
import styles from './styles.js';
import {useSelector} from 'react-redux';
import {selectTravelTimeInformation} from './../../../slices/navSlice';

const PackageTypes = ({typeState, onSubmit}) => {
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const [selectedType, setSelectedType] = typeState;

  return (
    <View>
      <View
        style={{
          backgroundColor: 'black',
          padding: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontFamily: 'Raleway-black', color: 'white'}}>
          Entire distance: {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <View >
        {typesData.map(type => (
          <PackageTypeRow
            type={type}
            key={type.id}
            isSelected={type.type === selectedType}
            onPress={() => setSelectedType(type.type)}
          />
        ))}
      </View>

      <View>
        <Pressable
          onPress={onSubmit}
          style={{
            backgroundColor: '#ffd60a',
            padding: 10,
            marginBottom: 12,
            marginLeft: 12,
            marginRight: 12,

            alignItems: 'center',

            borderRadius: 5,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontFamily: 'Raleway-Bold',
            }}>
            Confirm Package
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PackageTypes;
