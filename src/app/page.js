import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/Hero'))
const Products = dynamic(() => import('../components/Products'))

export default function Home() {
  return <>
    <Hero />
    <Products />
  </>
}
