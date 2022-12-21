import { View, Text } from 'react-native'
import React,{useContext} from 'react'

import {CartContext} from '../../contexts/CartContexts'


export default function Cart() {
  
  const {cart} = useContext(CartContext)
  // console.log(typeof(cart))
  return (
    <View>
      <Text>Preço: {cart[1].preco} </Text>
    </View>
  )
}