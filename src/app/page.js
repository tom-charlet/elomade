import dynamic from 'next/dynamic'
import Seo from '@/lib/Seo'

const Building = dynamic(() => import('../components/Building'))

export default function Home() {
  return <Building />
}

export async function generateMetadata() {
  return Seo()
}
