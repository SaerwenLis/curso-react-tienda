'use client'
import { CloseIcon } from "../assets/CloseIcon";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export default function ProductDetail() {
    const context = useContext(ShoppingCartContext)

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-64px)] flex-col items-center fixed right-0 top-[64px] bg-white border border-slate-500 rounded-lg`}>
        <div className="w-full flex justify-between items-center py-4 px-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <button 
            onClick={() => context.closeProductDetail()}>
                <CloseIcon />  
            </button>
        </div>
        <figure className="px-6 max-h-64">
            <img 
                className="w-full h-full rounded-lg object-cover" 
                src={context.productToShow.image} 
                alt={context.productToShow.title}/>
        </figure>
        <p className="flex flex-col p-6">
            <span className="font-bold text-2xl text-rose-900 mb-2">${context.productToShow.price}</span>
            <span className="font-medium text-md">{context.productToShow.title}</span>
            <span className="font-light text-sm">{context.productToShow.description}</span>
        </p>
    </aside>
    )
}
