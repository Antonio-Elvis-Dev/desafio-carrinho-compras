import { View, Text } from 'react-native'
import React, { useState, createContext } from 'react'


export const CartContext = createContext({})

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])


    function addItemCart(newItem) {

        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            const cartList = cart
            cartList[indexItem].amount += 1
            cartList[indexItem].total = cartList[indexItem].preco * cartList[indexItem].amount

            setCart(cartList)
            // console.log(cartList)
            return
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.preco
        }
        setCart(products => [...products, data])
        // console.log([...cart, data])

    }

    return (
        <CartContext.Provider
            value={{ cart, addItemCart }}
        >
            {children}
        </CartContext.Provider>
    )
}