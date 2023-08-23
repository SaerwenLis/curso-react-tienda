import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'Shopi Shop Online',
  description: 'Shopi Shop Online',
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
        <Header />
        {children}
      </body>
    </html>
  )
}
