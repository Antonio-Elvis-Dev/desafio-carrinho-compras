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
    function removeItemCart(product) {
        const indexItem = cart.findIndex(item => item.id === product.id)

        if (cart[indexItem]?.amount > 1) {
            let cartList = cart

            cartList[indexItem].amount -= 1
            cartList[indexItem].total -= cartList[indexItem].preco

            setCart(cartList)
            return
        }

        const removeItem = cart.filter(item => item.id !== product.id)

        setCart(removeItem)
        // console.log([...cart, data])

    }
    return (
        <CartContext.Provider
            value={{ cart, addItemCart, removeItemCart }}
        >
            {children}
        </CartContext.Provider>
    )
}