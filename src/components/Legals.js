'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Text = dynamic(() => import('./Text'));

const Legals = () => {
    const [content, setContent] = useState('')

    useEffect(() => {
        fetch('/md/mentions-legales.md')
            .then((res) => {
                if (!res.ok) throw new Error('Erreur de chargement')
                return res.text()
            })
            .then((text) => setContent(text))
            .catch((err) => console.error('Échec du chargement du markdown :', err))
    }, [])

    return <section className='mx-auto lg:max-w-[720px] pb-20 pt-[160px] px-6 md:px-10 lg:px-0 post-text'>
        <Text>{content}</Text>
    </section>
}

export default Legals