'use client'
import { useContext } from "react";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import LayoutWrapper from "../../components/LayoutWrapper";
import OrderCard from "@/app/components/OrderCard";
import { ChevronLeftIcon } from "@/app/assets/ChevronLeftIcon";
import Link from "next/link";

export default function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <LayoutWrapper>
      <div className="flex items-center justify-center w-80 mb-2 relative">
        <Link href='/my-orders' className="absolute left-0">
          <ChevronLeftIcon />    
        </Link>
        <h1 className="font-bold text-lg">My Order</h1>
      </div>

      <div className="flex flex-col w-80">
       {
            context.order?.slice(-1)[0]?.products?.map(product => (
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
