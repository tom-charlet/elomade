import dynamic from 'next/dynamic'

const Heading = dynamic(() => import('./Heading'));

const Banner = ({ title }) => {
    return <section className='w-full bg-beige-300'>
        <div className='pt-[140px] lg:pt-[180px] responsive-container text-center pb-12 lg:pb-20'>
            <Heading level="1">{title}</Heading>
        </div>
    </section>
}

export default Banner