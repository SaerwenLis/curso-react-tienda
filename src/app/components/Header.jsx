'use client'
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { CartIcon } from "../assets/CartIcon";
import Link from "next/link";

const leftNavLinks = [
    {
        name: "All", 
        href: "/",
        category: ""
    },
    {
        name: "Men's Clothing", 
        href: "/men",
        category: "men's clothing"
    },
    {
        name: "Women's Clothing", 
        href: "/women",
        category: "women's clothing"
    },
    {
        name: "Electronics", 
        href: "/electronics",
        category: "electronics"
    },
    {
        name: "Jewelery", 
        href: "/jewelery",
        category: "jewelery"
    },
    {
        name: "Others", 
        href: "/others",
        category: "others"
    }
]

const rightNavLinks = [
    {
        name: "My Account", 
        href: "/my-account"
    },
    {
        name: "My Orders", 
        href: "/my-orders"
    },
    {
        name: "Sign In", 
        href: "/sign-in"
    },
]

export default function Header() {
    const pathName = usePathname()
    const context = useContext(ShoppingCartContext)
    
    const setHome = () => {
        context.setSearchByCategory(null)
        context.setSearchByTitle(null)
    }

    const setSearch = (link) => {
        context.setSearchByCategory(link.category)
        context.setSearchByTitle(null)
    }

    const handleClick = () => {
        if (window.innerWidth < 1280) {
            context.setNavBar(false)
        }
    } 

    const handleButton = () => {
        context.closeCheckOutSideMenu()
        context.setNavBar(!context.navBar)
    }

    const handleCartButton = () => {
        if (window.innerWidth < 1280) {
            context.setNavBar(false)
        } 
        context.openCheckOutSideMenu()
    }
 
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1280) {
                context.setNavBar(true)
            } 
        })
    },[])

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 1280) {
                context.setNavBar(false)
            } 
        })
    },[])

    return (
        <header> 
            <nav className="flex flex-col xl:flex-row items-center xl:fixed z-10 w-full xl:h-16 relative font-Outfit text-base top-0 bg-white">
                <div className="flex justify-between items-center fixed xl:static top-0 bg-white w-full h-12 xl:h-16 xl:py-4 z-10 xl:block xl:w-28 px-6">
                    <button> 
                        <Link
                            className="font-black text-2xl relative top-[-2.7px]"
                            href="/"
                            onClick={() => setHome()}
                            >
                            Shopi
                        </Link>
                    </button>
                    <button className="xl:hidden" onClick={() => handleButton()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    </button>
                </div>
                <div className={`h-full w-full flex-col xl:flex-row justify-between items-center ${context.navBar ? 'flex' : 'hidden'}`}>
                   <ul className="flex flex-col xl:flex-row items-center gap-3 xl:my-0 my-10">
                    {leftNavLinks.map((link) => {
                        const isActive = pathName === link.href
                        return (
                            <li key={link.category} onClick={() => handleClick()}>
                                <Link
                                className={`${isActive ? 'font-semibold underline underline-offset-4' : ''}`}
                                href={link.href}
                                onClick={() => setSearch(link)}
                                >
                                {link.name}
                                </Link>
                            </li>
                        )
                    })}   
                    </ul>
                    <ul className="flex flex-col xl:flex-row items-center gap-3 mb-10 xl:mb-0">
                        <li className="font-light text-gray-600">
                            prueba@platzi.com
                        </li>
                        {rightNavLinks.map((link) => {
                            const isActive = pathName === link.href
                            return (
                                <li key={link.name}>
                                    <Link
                                    className={`${isActive ? 'font-semibold underline underline-offset-4' : ''}`}
                                    href={link.href}
                                    >
                                    {link.name}
                                    </Link>
                                </li>
                            )
                        })} 
                        <li 
                        onClick={() => handleCartButton()}
                        className="flex justify-center items-center cursor-pointer">
                            <CartIcon/>
                            <span className="w-4 h-4 rounded-full bg-black text-white flex justify-center items-center text-xs relative right-3 bottom-1">{context.cartProducts.length}</span>
                        </li>  
                    </ul> 
                </div>           
            </nav>
        </header>
    )
}
