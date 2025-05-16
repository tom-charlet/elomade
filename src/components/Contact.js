import dynamic from 'next/dynamic'

const Heading = dynamic(() => import('../components/Heading'))
const Button = dynamic(() => import('../components/Button'))

const Contact = () => {
    return <section className='bg-red-800 py-[120px]'>
        <div className='responsive-container grid grid-cols-2 gap-32 text-beige-300'>
            <div className='flex flex-col'>
                <Heading level="2" className="mb-6">Me contacter</Heading>
                <p className='mb-10 text-balance'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-3'>
                        <Button icon="tiktok" variante="fill-beige" />
                        <Button icon="instagram" variante="fill-beige" />
                    </div>
                    <Button icon="email" variante="stroke-beige">elomade@elomade.fr</Button>
                </div>
            </div>
            <span className='aspect-[16/10] w-full bg-beige-300 rounded-2xl'>

            </span>
        </div>
    </section>
}

export default Contact