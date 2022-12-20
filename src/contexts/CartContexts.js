import { View, Text } from 'react-native'
import React, { useState, createContext } from 'react'


export const CartContext = createContext({})

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])


    function addItemCard(newItem) {

        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {

        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.preco
        }
        setCart(...products => [...products, data])
        console.log([...cart, data])
    }
    function removeItemCard() {

    }
    return (
        <CartContext.Provider
            value={{ cart, addItemCard }}
        >
            {children}
        </CartContext.Provider>
    )
}