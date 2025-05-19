import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/Hero'))
const Products = dynamic(() => import('../components/Products'))
const Contact = dynamic(() => import('../components/Contact'))

export default function Home() {
  return <>
    <Hero />
    <Products title="Les nouveautés" />
    <Contact />
  </>
}
