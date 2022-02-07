import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container:{
        padding: 10,
        height: '100%',
        

    },
    textInput: {

        backgroundColor:'white',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        marginLeft: 15,
        fontFamily:'Raleway-Bold',
        color:'black',
        borderColor: 'black',
        borderWidth:1,
    
        
        
        

    },separator:{
        backgroundColor: '#d9d9d9',
        height:1,
      },
      listView:{
            position: 'absolute',
            top:105,
        
      },

      autocompleteContainer:
        {
            position: 'absolute',
            top: 10,
            left: 5,
            right: 20,
          },
      
    row:{
        flexDirection: 'row',
        alignItems:'center',
        marginVertical: 12,
        marginHorizontal: 10,
    
        
    },
    iconContainer: {
        backgroundColor:'#001d3d',
        padding: 5,
        borderRadius: 50,
        marginRight: 12,

    },
    locationText:{
       

    },
    circle:{
        width: 8,
        height: 8,
        backgroundColor:'black',
        position: 'absolute',
        top: 30,
        left: 8.5,
        borderRadius:5

    },
    line:{
        width: 2,
        height: 59,
        backgroundColor:'black',
        position: 'absolute',
        top: 37,
        left: 11.5,
       

    },
    square:
    {
        width: 12,
        height: 12,
        backgroundColor:'black',
        position: 'absolute',
        top: 95,
        left: 7,
        borderRadius:6

    },


});

export default styles;