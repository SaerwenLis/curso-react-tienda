'use client'
import { useContext } from "react";
import Card from "./components/Card";
import LayoutWrapper from "./components/LayoutWrapper";
import ProductDetail from "./components/ProductDetail";
import { ShoppingCartContext } from "./context/ShoppingCartContext";
import { SearchIcon } from "./assets/SearchIcon";

export default function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        ) 
      } else {
        return <div>No results for {context.searchByTitle}</div>
      }
    } else {
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }
  const renderTitle = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          <h1 className="mb-2 font-bold text-lg">Results for "{context.searchByTitle}"</h1>
        ) 
      } else {
        return <div>No results for {context.searchByTitle}</div>
      }
    } else {
      return (
        <h1 className="mb-2 font-bold text-lg">Home</h1>
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
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}        
      </div>
      <ProductDetail />
    </LayoutWrapper>
  )
}
