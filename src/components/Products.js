import dynamic from 'next/dynamic'

const Heading = dynamic(() => import('./Heading'))

const Products = () => {
    return <section className='py-[120px] flex flex-col gap-6'>
        <div className='flex flex-col responsive-container'>
            <Heading level="2">Les créations</Heading>
        </div>
    </section>
}

export default Products