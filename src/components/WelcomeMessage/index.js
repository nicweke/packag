import React from 'react';
import {View, Text} from "react-native";
import styles from './styles';

const WelcomeMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Packag</Text>
            <Text style={styles.text}>We make the sending and receiving of packages a process that is owned by you and is friendly to you</Text>
            <Text style={styles.learnMore}>Learn More</Text>
            
        </View>
    );
};

export default WelcomeMessage;