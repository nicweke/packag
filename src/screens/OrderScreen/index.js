import React,{ useState,useEffect } from 'react';
import { View, Text,Dimensions } from "react-native";
import OrderMap from '../../components/OrderMap';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import { getOrder, getPackage } from './../../graphql/queries';
import { onOrderUpdated, onPackageUpdated} from './subscriptions';

const OrderScreen = (props) => {
    const [pack, setPackage] = useState(null);
    const [order, setOrder] = useState(null);

    const route = useRoute();

    //fetch order on initial render
    useEffect(() => {
      const fetchOrder = async () =>{
          try{
            const orderData = await API.graphql(
                graphqlOperation(getOrder, 
                    {id: route.params.id})
            )
            setOrder(orderData.data.getOrder);
          } catch(e){
              console.error(e);
          }

      }
      fetchOrder();
       
    }, []);

    //subscribe to order updates
    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(onOrderUpdated, {id: route.params.id})
        ).subscribe({
            next: ({ value }) => setOrder(value.data.onOrderUpdated),
            error: error => console.warn(error)
        })
      return() => subscription.unsubscribe();
    }, []);
    
    

    //fetch package data when order is updated
    useEffect(() => {
        if(!order?.packageId || order.packageId === '1'){
            return;
        }
      const fetchPackage = async () =>{
          try{
            const packageData = await API.graphql(
                graphqlOperation(getPackage, 
                    {id: order.packageId})
            )
            setPackage(packageData.data.getPackage);
          } catch(e){
              console.error(e);
          }

      }
      fetchPackage();
       
    }, [order]);

    //subscribe to car updates
    useEffect(() => {
        if(!order?.packageId || order.packageId === '1'){
            return;
        }

        const subscription = API.graphql(
            graphqlOperation(onPackageUpdated, {id: order.packageId})
        ).subscribe({
            next: ({ value }) => setPackage(value.data.onPackageUpdated),
            error: error => console.warn(error)
        })
      return() => subscription.unsubscribe();
    }, [order]);
    
    
    return (
        <View>
            <View style={{height: Dimensions.get('window').height - 400 }}>
                <OrderMap pack={pack} />
            </View>
            <View>
                <Text>Order Status:{order?.status}</Text>
                
            </View>
            
        </View>
    );
};

export default OrderScreen;