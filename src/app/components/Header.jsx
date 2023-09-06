'use client'
import { usePathname } from "next/navigation";
import { useContext } from "react";
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

    return (
        <header> 
            <nav className="flex justify-between items-center fixed z-10 w-full font-Outfit text-base py-4 px-6 top-0 bg-white">
                <ul className="flex items-center gap-3">
                    <li> 
                        <Link
                            className="font-black text-2xl relative top-[-2.66px]"
                            href="/"
                            onClick={() => setHome()}
                            >
                            Shopi
                        </Link>
                    </li>
                    {leftNavLinks.map((link) => {
                        const isActive = pathName === link.href
                        return (
                            <li key={link.category}>
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
                <ul className="flex items-center gap-3">
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
                    className="flex justify-center items-center">
                        <CartIcon/>
                        <span className="w-4 h-4 rounded-full bg-black text-white flex justify-center items-center text-xs relative right-3 bottom-1">{context.count}</span>
                    </li>  
                </ul>
            </nav>
        </header>
    )
}
