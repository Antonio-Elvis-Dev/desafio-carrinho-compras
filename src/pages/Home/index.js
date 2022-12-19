import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'

import List from '../List'

export default function Home() {
  const data = [
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
  ]
  return (
    <View>

      <FlatList data={data} keyExtractor={(item)=>item.key} 
      renderItem={({item})=><List data={item} />} />
    </View>
  )
}