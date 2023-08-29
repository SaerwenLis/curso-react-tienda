'use client'
import { CloseIcon } from "../assets/CloseIcon";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export default function ProductDetail() {
    const context = useContext(ShoppingCartContext)

/*     const addProductToCart = (event, data) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, data])
        context.openCheckOutSideMenu()
    }  */
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-60px)] flex-col items-center fixed right-0 top-[60px] bg-white border border-slate-500 rounded-lg`}>
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
{/*         <button 
        onClick={(event) => addProductToCart(event, data)}
        className="bg-rose-900 text-white text-xs p-1 w-1/3 rounded-lg">Add to cart</button>  */}
    </aside>
    )
}
