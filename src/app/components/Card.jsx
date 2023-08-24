'use client'
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export default function Card({ data }) {
    const context = useContext(ShoppingCartContext)
    return (
        <article className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/70 rounded-lg text-black text-xs m-2 px-3 first-letter:capitalize">{data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.image} alt={data.title} />
                <div 
                    onClick={() => context.setCount(context.count + 1)}
                    className="absolute top-0 right-0 flex justify-center items-center font-medium bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-normal truncate mr-2">{data.title}</span>
                <span className="text-sm font-medium">${data.price}</span>
            </p>
        </article>
    )
}
