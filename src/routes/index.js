import { View, Text, StyleSheet } from 'react-native'
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
                        <Text style={styles.container}>3</Text>
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
        fontSize:16
    }
})