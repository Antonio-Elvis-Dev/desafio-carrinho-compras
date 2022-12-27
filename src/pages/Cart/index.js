import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContexts'

import CartProducts from '../../components/CartProducts'

export default function Cart() {
  const { cart,total, addItemCart, removeItemCart } = useContext(CartContext)


  return (
    <SafeAreaView
    style={styles.container}
    >

      <FlatList
        data={cart}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => <Text>Nenhum item no Carrinho</Text>}
        renderItem={({ item }) => <CartProducts
          data={item}
          addAmount={() => addItemCart(item)}
          removeAmount={() => removeItemCart(item)} />}

        ListFooterComponent={() => <Text style={styles.total}>Total R$ {total}</Text>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24
  }
})