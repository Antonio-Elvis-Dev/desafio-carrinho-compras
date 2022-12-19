import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/EvilIcons'

const BottomTab = createBottomTabNavigator()
export default function Routes() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name='Home' component={Home}  options={{
                tabBarIcon:({color})=>(
                    <Icon name='home' color={color} size={26}/>
                )
            }}/>
            <BottomTab.Screen name='Cart' component={Cart} options={{
                tabBarIcon:({color})=>(
                    <Icons name='cart' color={color} size={30}/>
                )
            }} />
        </BottomTab.Navigator>)
}