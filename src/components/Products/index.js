import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, createContext } from 'react'



export default function Product({ data, addToCart }) {

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text>{data.nome}</Text>
                <Text>R$ {data.preco}</Text>
            </View>
            <View style={styles.areaButton}>
                <TouchableOpacity
                    onPress={addToCart}
                    style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity >

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 15,
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    areaButton: {
        flexDirection: 'row',
        marginRight: 10,
        marginTop: 5
    },

    button: {
        margin: 5,
        backgroundColor: '#00af2c',
        padding: 10,
        borderRadius: 10,

    },
    textButton: {
        fontSize: 20,
        paddingHorizontal: 10
    }
})