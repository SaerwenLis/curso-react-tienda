'use client'
import { useContext } from "react";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import LayoutWrapper from "../../components/LayoutWrapper";
import OrderCard from "@/app/components/OrderCard";

export default function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <LayoutWrapper>
      <h1 className="mb-2 font-bold text-lg">My Order</h1>
      <div className="flex flex-col w-80">
       {
            context.order?.slice(-1)[0].products?.map(product => (
                <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                />
            ))
        }   
        </div>
    </LayoutWrapper>
  )
}
