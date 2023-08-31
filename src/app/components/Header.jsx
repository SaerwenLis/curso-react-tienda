'use client'
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { CartIcon } from "../assets/CartIcon";
import Link from "next/link";

const leftNavLinks = [
    {
        name: "All", 
        href: "/"
    },
    {
        name: "Men's Clothing", 
        href: "/men"
    },
    {
        name: "Women's Clothing", 
        href: "/women"
    },
    {
        name: "Electronics", 
        href: "/electronics"
    },
    {
        name: "Jewelery", 
        href: "/Jewelery"
    },
    {
        name: "Others", 
        href: "/others"
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
    return (
        <header> 
            <nav className="flex justify-between items-center fixed z-10 w-full font-Outfit text-base py-4 px-6 top-0 bg-white">
                <ul className="flex items-center gap-3">
                    <li> 
                        <Link
                            className="font-black text-2xl relative top-[-2.66px]"
                            href="/"
                            key='1'
                            >
                            Shopi
                        </Link>
                    </li>
                    {leftNavLinks.map((link) => {
                        const isActive = pathName === link.href
                        return (
                            <li>
                                <Link
                                className={`${isActive ? 'font-semibold underline underline-offset-4' : ''}`}
                                href={link.href}
                                key={link.name}
                                >
                                {link.name}
                                </Link>
                            </li>
                        )
                    })}   
                </ul>
                <ul className="flex items-center gap-3">
                    <li className="font-light text-gray-600" key='2'>
                        prueba@platzi.com
                    </li>
                    {rightNavLinks.map((link) => {
                        const isActive = pathName === link.href
                        return (
                            <li>
                                <Link
                                className={`${isActive ? 'font-semibold underline underline-offset-4' : ''}`}
                                href={link.href}
                                key={link.name}
                                >
                                {link.name}
                                </Link>
                            </li>
                        )
                    })} 
                    <li 
                    className="flex justify-center items-center"
                    key='3'>
                        <CartIcon/>
                        <span className="w-4 h-4 rounded-full bg-black text-white flex justify-center items-center text-xs relative right-3 bottom-1">{context.count}</span>
                    </li>  
                </ul>
            </nav>
        </header>
    )
}
