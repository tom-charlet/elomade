import dynamic from 'next/dynamic'

const Building = dynamic(() => import('../components/Building'))

export default function Home() {
  return <Building />
}