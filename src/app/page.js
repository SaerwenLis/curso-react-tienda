/* 'use client'
import { useState, useEffect } from "react"; */
import Card from "./components/Card";
import LayoutWrapper from "./components/LayoutWrapper";
import ProductDetail from "./components/ProductDetail";

async function getData() {
  const response = await fetch('https://fakestoreapi.com/products')    
  return response.json()
}


export default async function Home() {
/*   const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []) */

  const data = await getData()

  return (
    <LayoutWrapper >
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          data?.map(item => (
            <Card data={item} />
          ))
        }        
      </div>
      <ProductDetail />
    </LayoutWrapper>
  )
}
