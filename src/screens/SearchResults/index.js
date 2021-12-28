import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import PackageTypes from '../../components/PackageTypes';
import RouteMap from '../../components/RouteMap';

const SearchResults = (props) => {
    return (
        <View style={{display: 'flex', justifyContent:'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 450 }}>
                <RouteMap />
            </View>
            
            <View style={{height:450}}>
                <PackageTypes />    
            </View>
            
            
        </View>
    );
};

export default SearchResults;