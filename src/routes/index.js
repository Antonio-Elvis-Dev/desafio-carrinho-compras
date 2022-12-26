import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {CartContext} from '../contexts/CartContexts'

const Stack = createStackNavigator()
export default function Routes() {
    
    const {cart} = useContext(CartContext)
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{
                headerShown: false,
                
            }} />
            <Stack.Screen name='Cart' component={Cart} options={{
                headerTitle: 'Meu Carrinho',
                
            }} />
        </Stack.Navigator>)
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c9bcbc',
        textAlign: 'center',
        borderRadius: 10,
        marginRight:15,
        fontSize:16,
        color:'#000'
    }
})