import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, createContext } from 'react'



export const ItemContext = createContext({})

export default function List({ data }) {

    const [valorTotal, setValorTotal] = useState(0)

    function handleAdd() {
        console.log(valorTotal)
    }
    function handleRemove() {
        console.log(valorTotal)

    }
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text>{data.nome}</Text>
                <Text>{data.preco}</Text>
            </View>
            <View style={styles.areaButton}>
                <TouchableOpacity
                    onPress={handleAdd}
                    style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity >

            </View>
            <ItemContext.Provider value={{ handleAdd, handleRemove }}>

            </ItemContext.Provider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop:10,
        marginHorizontal: 10,
        marginBottom: 5,
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
        borderRadius: 20,

    },
    textButton: {
        fontSize: 20,
        paddingHorizontal: 10
    }
})