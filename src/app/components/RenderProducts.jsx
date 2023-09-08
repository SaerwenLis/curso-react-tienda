'use client'
import { useContext } from "react";
import Card from "./Card";
import LayoutWrapper from "./LayoutWrapper";
import ProductDetail from "./ProductDetail";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { SearchIcon } from "../assets/SearchIcon";
import { usePathname } from "next/navigation";
import Spinner from "./Spinner";

export default function RenderProducts() {
  const context = useContext(ShoppingCartContext)
  const pathName = usePathname()

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      ) 
    } 
  }

  const title = () => {
    let path = pathName.substring(pathName.lastIndexOf('/') + 1)
    if (pathName === '/') {
        return <span>Home</span>
    } else {
        if (path === 'men') {
            return <span>Men's Clothing</span>
        } else if (path === 'women') {
            return <span>Women's Clothing</span>
        } else {
            return <span>{path}</span>     
        }
    }
  }

  const renderTitle = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          <h1 className="mb-2 font-bold text-lg">Results for "{context.searchByTitle}"</h1>
        ) 
      } else {
        return <div className="mb-2 font-bold text-lg">No results for {context.searchByTitle}</div>
      }
    } else {
      return (
        <h1 className="mb-2 font-bold text-lg first-letter:uppercase">{title()}</h1>
      )
    }
  }

  return (
    <LayoutWrapper >
      {renderTitle()}
      <div className="flex rounded-md border border-gray-400 w-80 p-2 mb-4">
        <input 
        type="text" 
        placeholder="Search products"
        className="w-full h-full placeholder:text-gray-400 placeholder:font-light focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
        <SearchIcon />
      </div>
      {
        context.loading ? <Spinner /> : <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">{renderView()}</div>
      }
      <ProductDetail />
    </LayoutWrapper>
  )
}
