import dynamic from 'next/dynamic'
import Image from 'next/image';

const Slider = dynamic(() => import('./Slider'));
const Heading = dynamic(() => import('./Heading'));
const Button = dynamic(() => import('./Button'));

const Product = ({ title, categories, images, price, minPrice, maxPrice, text }) => {
    return <section className='responsive-container w-full mt-16 lg:mt-[112px] lg:max-h-[calc(100svh-112px)] py-16 lg:pb-16 lg:pt-12 flex flex-col lg:flex-row gap-10 lg:gap-20'>
        <div className='w-full lg:w-[60%] shrink-0 h-full'>
            {images?.length > 1 && <Slider
                className="!aspect-[16/12] xl:!aspect-[16/10] lg:!w-full !rounded-3xl"
                spaceBetween={16}
                pagination
                freeMode={true}
                mousewheel={true}
            >
                {images.map((item, index) => <Image key={index} src={item.url ?? "/placeholder.svg"} alt={item.alt ?? title} width={0} height={0} sizes='100vw' className='rounded-3xl w-auto h-full object-cover' />)}
            </Slider>}
            {images?.length == 1 && <Image src={images[0].url ?? "/placeholder.svg"} alt={images[0].alt ?? title} width={0} height={0} sizes='100vw' className='rounded-3xl w-full aspect-[16/12] xl:aspect-[16/10] object-cover' />}
        </div>
        <div className='flex md:items-start flex-col gap-6 lg:gap-8 w-auto'>
            <div className='flex flex-col'>
                {categories?.length > 0 && <Heading level="6" className="opacity-70">{categories?.map((item, index) => {
                    return item ? `${index > 0 ? ` - ${item.title}` : item.title}` : null
                })}</Heading>}
                <Heading level="2" tag="h1" className="mt-4">{title}</Heading>
                <Heading tag="p" level="3" className="mt-6">
                    Prix :
                    {price && <> <strong className='text-red-700'>{new Intl.NumberFormat("fr-FR").format(price)} €</strong></>}
                    {(minPrice && !maxPrice) && <> à partir de <strong className='text-red-700'>{new Intl.NumberFormat("fr-FR").format(minPrice)} €</strong></>}
                    {(minPrice && maxPrice) && <> de <strong className='text-red-700'>{new Intl.NumberFormat("fr-FR").format(minPrice)}</strong> à <strong className='text-red-700'>{new Intl.NumberFormat("fr-FR").format(maxPrice)} €</strong></>}
                </Heading>
            </div>
            {text && <p>{text}</p>}
            <Button href="#me-contacter" className="mt-1 lg:mt-0">Me contacter</Button>
        </div>
    </section>
}

export default Product