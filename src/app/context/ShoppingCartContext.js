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

    //Get Products
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, []) 

    //Search products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Filtered items
    const [filteredItems, setFilteredItems] = useState(null)

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if(searchByTitle) {
            setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        }
    }, [items, searchByTitle]) 

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
            setOrder,
            items, 
            setItems, 
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}>
           {children}         
        </ShoppingCartContext.Provider>
    )
}