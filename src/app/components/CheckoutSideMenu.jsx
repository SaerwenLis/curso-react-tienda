'use client'
import { CloseIcon } from "../assets/CloseIcon";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import OrderCard from "./OrderCard";

export default function CheckOutSideMenu() {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

  return (
    <aside className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-60px)] flex-col items-center fixed right-0 top-[60px] bg-white border border-slate-500 rounded-lg`}>
        <div className="w-full flex justify-between items-center py-4 px-6">
            <h2 className="font-medium text-xl">My Order</h2>
            <button 
            className="cursor-pointer"
            onClick={() => context.closeCheckOutSideMenu()}>
                <CloseIcon />  
            </button>
        </div>
        <div className="w-full px-4 overflow-y-scroll">
        {
            context.cartProducts.map(product => (
                <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                handleDelete={handleDelete} />
            ))
        }     
        </div>

    </aside>
    )
}
