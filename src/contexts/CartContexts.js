import { View, Text } from 'react-native'
import React, { useState, createContext } from 'react'


export const CartContext = createContext({})

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    function addItemCart(newItem) {

        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            const cartList = cart
            cartList[indexItem].amount += 1
            cartList[indexItem].total = cartList[indexItem].preco * cartList[indexItem].amount

            setCart(cartList)
            totalResultCart(cartList)
            return
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.preco
        }
        setCart(products => [...products, data])
        totalResultCart([...cart, data])

        // console.log([...cart, data])

    }
    function removeItemCart(product) {
        const indexItem = cart.findIndex(item => item.id === product.id)

        if (cart[indexItem]?.amount > 1) {
            let cartList = cart

            cartList[indexItem].amount -= 1
            cartList[indexItem].total -= cartList[indexItem].preco

            setCart(cartList)
            totalResultCart(cartList)
            return
        }

        const removeItem = cart.filter(item => item.id !== product.id)

        setCart(removeItem)
        totalResultCart(removeItem)
        // console.log([...cart, data])

    }

    function totalResultCart(items) {
        let myCart = items
        let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)
        setTotal(result.toFixed(2))
    }

    return (
        <CartContext.Provider
            value={{ cart, addItemCart, removeItemCart, total }}
        >
            {children}
        </CartContext.Provider>
    )
}