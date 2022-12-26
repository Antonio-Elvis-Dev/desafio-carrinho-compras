import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icons from 'react-native-vector-icons/EvilIcons'

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

      preco: 4.50
    },
    {
      id: '3',
      nome: 'Sorvete',
      preco: 3.50
    },
    {
      id: '4',
      nome: 'Fanta',
      preco: 7.50
    },
    {
      id: '5',
      nome: 'Hamburguer',
      preco: 10.50
    },
    {
      id: '6',
      nome: 'Frango',
      preco: 8.50
    },
    {
      id: '7',
      nome: 'Queijo',

      preco: 4.50
    },
    {
      id: '8',
      nome: 'Guaraná',
      preco: 3.50
    },
    {
      id: '9',
      nome: 'Pão',
      preco: 7.50
    },
    {
      id: '10',
      nome: 'Doce',
      preco: 10.50
    },
  ])

  const navigation = useNavigation()
  // TODO pega o item que foi clicado

  function handleAddCart(item) {
    addItemCart(item)

  }

  return (
    <SafeAreaView>
      <View style={styles.container}>

        <Text style={styles.title}>Lista de Produtos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>

          <View style={styles.dot}>

            <Text >{cart?.length}</Text>
          </View>
          <Icons name='cart' size={40} />


        </TouchableOpacity>
      </View>

      <FlatList data={products} keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Product data={item} addToCart={() => handleAddCart(item)} />} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    marginBottom: 25,
    marginHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30
  }
  ,

  dot: {
    backgroundColor: '#a38e8e',
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 99,
    bottom: 35,
    left: -4
  }
})