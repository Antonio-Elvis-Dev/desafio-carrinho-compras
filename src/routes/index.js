import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/EvilIcons'

import {CartContext} from '../contexts/CartContexts'

const BottomTab = createBottomTabNavigator()
export default function Routes() {
    
    const {cart} = useContext(CartContext)
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name='Home' component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Icon name='home' color={color} size={26} />
                )
            }} />
            <BottomTab.Screen name='Cart' component={Cart} options={{
                headerTitle: 'Meu Carrinho',
                tabBarIcon: ({ color }) => (
                    <View>
                        <Text style={styles.container}>{cart?.length}</Text>
                        <View>
                            <Icons name='cart' color={color} size={30} />
                        </View>
                    </View>
                )
            }} />
        </BottomTab.Navigator>)
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