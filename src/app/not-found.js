import Link from 'next/link'
import LayoutWrapper from './components/LayoutWrapper'
 
export default function NotFound() {
  return (
    <LayoutWrapper>
      <section className="h-96 flex flex-col justify-center items-center">
        <figure>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-frown h-8 w-8 text-rose-900"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
        </figure>
        <h2 className="font-bold text-3xl mt-2">SORRY</h2>
        <p>We couldn&apos;t find that page</p>
        <Link href="/" className="bg-rose-900 text-white text-xs p-1 w-36 rounded-lg text-center mt-4 py-2">Return Home</Link>
      </section>
    </LayoutWrapper>
  )
}