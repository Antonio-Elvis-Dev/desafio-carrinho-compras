import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function CartProducts({ data }) {
    const [amount, setAmount] = useState(data?.amount)
    const [preco, setPreco] = useState(data?.preco)
    return (
        <View style={styles.container}>
            <View>

                <Text>{data.nome} </Text>
                <Text>{amount*preco}</Text>
            </View>
            <View>
                <TouchableOpacity>

                    <Text>-</Text>
                </TouchableOpacity>
                <Text>{amount}</Text>
                <TouchableOpacity>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    }
})