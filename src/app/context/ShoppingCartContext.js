'use client'
import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
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
    const [items, setItems] = useState([])

    useEffect(() => {
        (async () => {
            // get the data from the api
            const data = await fetch('/api');
            // convert data to json
            const json = await data.json();
            console.log(json.data);
            setItems(json?.data)
        })(); 
    }, []) 

    //Search products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Filtered items
    const [filteredItems, setFilteredItems] = useState(null)

    //Filtered items by title
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    //Filtered items by categories
    const [searchByCategory, setSearchByCategory] = useState(null)

    const filteredItemsByCategory = async (items, searchByCategory) => {
        return await items?.filter(item => item.category.toLowerCase() === searchByCategory.toLowerCase())
    }

    
    useEffect(() => {
        (async () => {
            const filterBy = async (searchType, items, searchByTitle, searchByCategory) => {
                if (searchType === 'BY_TITLE') {
                    return await filteredItemsByTitle(items, searchByTitle)
                }
                if (searchType === 'BY_CATEGORY') {
                    return await filteredItemsByCategory(items, searchByCategory)
                }
                if (searchType === 'BY_TITLE_AND_CATEGORY') {
                    return await filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
                }
                if (!searchType) {
                    return await items
                }
            }
            if(searchByTitle && searchByCategory) {
                setFilteredItems(await filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
            }
            if(searchByTitle && !searchByCategory) {
                setFilteredItems(await filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
            }
            if(!searchByTitle && searchByCategory) {
                setFilteredItems(await filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
            }
            if(!searchByTitle && !searchByCategory) {
                setFilteredItems(await filterBy(null, items, searchByTitle, searchByCategory))
            }
        })();   
    }, [items, searchByTitle, searchByCategory]) 

    //NavBar
    const [navBar, setNavBar] = useState(true)

    return (
        <ShoppingCartContext.Provider value={{
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
            filteredItems, 
            setSearchByCategory,
            navBar, 
            setNavBar
        }}>
           {children}         
        </ShoppingCartContext.Provider>
    )
}