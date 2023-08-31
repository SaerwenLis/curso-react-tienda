import Link from 'next/link'
import LayoutWrapper from './components/LayoutWrapper'
 
export default function NotFound() {
  return (
    <LayoutWrapper>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </LayoutWrapper>
  )
}