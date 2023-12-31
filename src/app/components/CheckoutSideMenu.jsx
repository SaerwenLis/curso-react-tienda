'use client'
import { CloseIcon } from "../assets/CloseIcon";
import { useContext } from "react";
import Link from "next/link";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import OrderCard from "./OrderCard";
import { totalPrice } from "../utils/price";
import { dateTime } from "../utils/date";

export default function CheckOutSideMenu() {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: dateTime(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.closeCheckOutSideMenu()
        context.setSearchByTitle(null)
    }

  return (
    <aside className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-60px)] flex-col fixed right-0 top-[64px] bg-white border border-slate-500 rounded-lg z-0`}>
        <div className="w-full flex justify-between items-center py-4 px-6">
            <h2 className="font-medium text-xl">My Order</h2>
            <button 
            className="cursor-pointer"
            onClick={() => context.closeCheckOutSideMenu()}>
                <CloseIcon />  
            </button>
        </div>
        <div className="w-full px-4 overflow-y-scroll flex-1">
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
        <div className="px-6">
            <p className="flex justify-between items-center">
                <span className="font-normal">Total: </span>
                <span className="font-medium text-xl">${totalPrice(context.cartProducts)}</span>
            </p>
            <Link href='/my-orders/my-order'>            
                <button 
                onClick={() => handleCheckout()}
                className="w-full bg-rose-900 py-2 text-white rounded-md mt-1 mb-5">
                    Checkout
                </button>
            </Link>
        </div>
    </aside>
    )
}
