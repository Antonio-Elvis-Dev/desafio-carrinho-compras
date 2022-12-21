import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import React, { useContext, useState } from 'react'

import Product from '../../components/Products'
import { CartContext } from '../../contexts/CartContexts'
export default function Home() {

  const { cart, addItemCart } = useContext(CartContext)

  const [products, setProducts] = useState([
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


// TODO pega o item que foi clicado

  function handleAddCart(item) {
    addItemCart(item)

  }

  return (
    <SafeAreaView style={styles.container}>

      <FlatList data={products} keyExtractor={(item) =>String(item.id)}
        renderItem={({ item }) => <Product data={item} addToCart={()=> handleAddCart(item)} />} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  }
})