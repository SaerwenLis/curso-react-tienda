'use client'
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { PlusIcon } from "../assets/PlusIcon";
import { CheckIcon } from "../assets/CheckIcon";

export default function Card({ data }) {
    const context = useContext(ShoppingCartContext)

    const showProduct = (data) => {
        context.openProductDetail()
        context.setProductToShow(data)
    }

    const addProductToCart = (event, data) => {
        event.stopPropagation()
        context.setCartProducts([...context.cartProducts, data])
        context.openCheckOutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-black/80 text-white rounded-full m-2 p-1">
                    <CheckIcon />
                </div>
            )
        } else {
            return (
                <div 
                    onClick={(event) => addProductToCart(event, data)}
                    className="absolute top-0 right-0 flex justify-center items-center font-medium bg-white/80 rounded-full m-2 p-1">
                    <PlusIcon />
                </div>
            )
        }
    }

    return (
        <article 
        onClick={() => showProduct(data)}
        className="bg-white cursor-pointer md:w-56 md:h-60 w-32 h-36 xs:w-40 xs:h-48">
            <figure className="relative mb-2 w-full h-4/5 bg-slate-100 rounded-lg ">
                <img className="w-full h-full object-cover rounded-lg mix-blend-multiply" src={data.image} alt={data.title} />
                <span className="absolute bottom-0 left-0 bg-white/70 rounded-lg text-black text-xs m-2 px-3 first-letter:capitalize">{data.category}</span>
            {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-normal truncate mr-2">{data.title}</span>
                <span className="text-sm font-medium text-rose-900">${data.price}</span>
            </p>
        </article>
    )
}
