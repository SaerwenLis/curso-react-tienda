'use client'
import { useContext } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import OrdersList from "../components/OrdersList";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import Link from "next/link";

export default function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <LayoutWrapper>
      <h1 className="mb-2 font-bold text-lg">My Orders</h1>
      {
        context.order.map((order, index) => (
          <Link href={`/my-orders/${index}`}>
            <OrdersList 
              key={index}
              date={order.date} 
              totalProducts={order.totalProducts} 
              totalPrice={order.totalPrice} />      
          </Link>
        ))       
      }
    </LayoutWrapper>
  )
}
