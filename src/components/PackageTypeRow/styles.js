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

        fontWeight: "bold",
        fontSize: 17,
        marginBottom: 5,
        color: '#1f1f1f',
    },
    time : {
        color: '#001d3d',

    },
    rightContainer : {
        width: 100,
        justifyContent: "flex-end",
        flexDirection: "row",

    },
    price: {
        color: '#1f1f1f',
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 5,

    }

});


export default styles;