import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputBox:{
        backgroundColor: '#ffd60a',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',

    },
    inputText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0a0d31'


    },
    timeContainer:{
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 50,
    },

    row:{

        flexDirection: 'row',
        padding: 20, 
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#464646'
    },
    iconContainer:{
        padding: 10,
        borderRadius: 25,

    },
    destinationText:{
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 16,
    }

});

export default styles;