import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Shopi: Online Shop',
  description: 'Shopi: Online Shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap" rel="stylesheet"/>
      </head>
      <body className='font-Outfit'>
        <ShoppingCartProvider>
          <Header />
          {children}          
        </ShoppingCartProvider>
      </body>
    </html>
  )
}
