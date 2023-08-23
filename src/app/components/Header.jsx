'use client'

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const leftNavLinks = [
    {
        name: "All", 
        href: "/"
    },
    {
        name: "Clothes", 
        href: "/clothes"
    },
    {
        name: "Electronics", 
        href: "/electronics"
    },
    {
        name: "Furniture", 
        href: "/furniture"
    },
    {
        name: "Toys", 
        href: "/toys"
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
        name: "My Order", 
        href: "/my-order"
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
    return (
        <header> 
            <nav className="flex justify-between items-center fixed z-10 w-full font-Outfit text-base py-4 px-6 top-0">
                <ul className="flex items-center gap-3">
                    <li> 
                        <Link
                            className="font-black text-lg"
                            href="/"
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
                    <li className="font-light text-gray-600">
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
                <li>
                    🛒0
                </li>  
                </ul>

            </nav>
        
        </header>
    )
}
