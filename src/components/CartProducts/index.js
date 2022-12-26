import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'

import { CartContext } from '../../contexts/CartContexts'


export default function CartProducts({ data, addAmount, removeAmount }) {
    const [amount, setAmount] = useState(data?.amount)
    const [preco, setPreco] = useState(data?.preco)

    const { addItemCart, removeItemCart } = useContext(CartContext)

    function handleIncrease() {
        addAmount()
        setAmount(item => item + 1)
    }

    function handleDecrease() {
        removeAmount()
        if(amount === 0){
            setAmount(0);
            return
        }
        setAmount(item=>item - 1)
    }
    return (
        <View style={styles.container}>
            <View >

                <Text style={styles.title}>{data.nome} </Text>
                <Text style={styles.price}>R$ {amount * preco}</Text>
            </View>
            <View style={styles.amountContainer}>
                <TouchableOpacity style={[styles.button]} onPress={handleDecrease} >

                    <Text style={styles.textQtd}>-</Text>
                </TouchableOpacity>
                <Text style={styles.textQtd}>{amount}</Text>
                <TouchableOpacity style={[styles.button]} onPress={handleIncrease} >
                    <Text

                        style={styles.textQtd}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#9e8989',
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 15,
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    price: {
        fontSize: 16
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14
    },
    button: {
        // borderWidth: 1,
        backgroundColor: '#758f2f',
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textQtd: {
        marginHorizontal: 10,
        fontSize: 20,
        alignItems: 'baseline',


    },

})