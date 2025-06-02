import React from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/Footer'))

const template = ({ children }) => {
    return <>
        <Header />
        <main className='max-w-full overflow-hidden'>
            {children}
        </main>
        <Footer />
    </>
}

export default template