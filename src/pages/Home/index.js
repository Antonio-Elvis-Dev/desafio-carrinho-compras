import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import React, { useContext, useState } from 'react'

import List from '../List'
import { CartContext } from '../../contexts/CartContexts'
export default function Home() {

  const { cart, addItemCart } = useContext(CartContext)

  const [data, setData] = useState([
    {
      id: '1',
      nome: 'Coca',
      preco: 8.50
    },
    {
      id: '2',
      nome: 'Pastel',
      preco: 8.50
    },
    {
      id: '3',
      nome: 'Sorvete',
      preco: 8.50
    },
    {
      id: '4',
      nome: 'Fanta',
      preco: 8.50
    },
    {
      id: '5',
      nome: 'Hamburguer',
      preco: 8.50
    },
  ])



  function handleAddCart(item) {
    addItemCart(item)
  }

  return (
    <SafeAreaView style={styles.container}>

      <FlatList data={data} keyExtractor={(item) => item.id}
        renderItem={({ item }) => <List data={item} addToCard={()=> handleAddCart()} />} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  }
})