'use client'
import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    //Shopping cart - Increment quantity
    const [count, setCount] = useState(0)

    //Shopping cart - add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //Product Detail - Open close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false) 

    //Checkout Side Menu - Open close
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false)
    const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true)
    const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false) 

    //Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    //Shopping cart - order
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount, 
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu, 
            order, 
            setOrder
        }}>
           {children}         
        </ShoppingCartContext.Provider>
    )
}