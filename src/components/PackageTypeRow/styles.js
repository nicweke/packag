import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,

    },
    image: {
        height: 80,
        width: 90,
        resizeMode: "contain",


    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,

    },
    type: {

        //fontWeight: "bold",
        fontSize: 17,
        marginBottom: 5,
        color: '#1f1f1f',
        fontFamily:'Raleway-Bold'
    },
    time : {
        color: '#001d3d',
        fontFamily:'Raleway-Medium'

    },
    rightContainer : {
        width: 100,
        justifyContent: "flex-end",
        flexDirection: "row",

    },
    price: {
        color: '#1f1f1f',
        //fontWeight: "bold",
        fontSize: 18,
        marginLeft: 5,
        fontFamily:'Raleway-SemiBold'

    }

});


export default styles;