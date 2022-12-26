import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContexts'

import CartProducts from '../../components/CartProducts'

export default function Cart() {
  const { cart, addItemCart, removeItemCart } = useContext(CartContext)

  
  return (
    <SafeAreaView
    // style={styles.container}
    >

      <FlatList data={cart} keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CartProducts data={item} addAmount={()=>addItemCart(item)} removeAmount={()=>removeItemCart(item)}/>} />
    </SafeAreaView>
  )
}