'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image';
import { useGlobal } from '@/context/Global'
import { motion } from 'framer-motion'
import { fadeUp, fadeRight, stagger } from '@/utils/variants'

const Slider = dynamic(() => import('./Slider'));
const Button = dynamic(() => import('./Button'));
const Heading = dynamic(() => import('./Heading'));
const Text = dynamic(() => import('./Text'));

const Product = ({ title, categories, images, price, minPrice, maxPrice, text, available }) => {
    const { isMobile } = useGlobal()

    return <section className='responsive-container w-full mt-16 lg:mt-[112px] lg:min-h-[calc(100svh-112px)] py-16 lg:pb-16 lg:pt-12 flex flex-col lg:flex-row gap-10 lg:gap-20'>
        <motion.div variants={isMobile ? fadeUp : fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className='w-full lg:w-[60%] shrink-0 h-full'>
            {images?.length > 1 && <Slider
                className="!aspect-[11/14] md:!aspect-[16/12] xl:!aspect-[16/10] lg:!w-full !rounded-3xl !max-h-[70svh] md:max-h-auto !w-full md:!w-auto"
                spaceBetween={16}
                pagination
                freeMode={true}
                mousewheel={true}
            >
                {images.map((item, index) => <span key={index} className='w-auto h-auto bg-beige-300'>
                    <Image key={index} src={item.url ?? "/placeholder.svg"} alt={item.alt ?? title} width={0} height={0} sizes='100vw' className={`rounded-3xl w-auto h-full object-cover min-w-[80svw] md:min-w-[50svw] ${images?.length == 2 ? "lg:min-w-[calc(25svw-32px)]" : "lg:min-w-auto"}`} />
                </span>)}
            </Slider>}
            {(!images || images?.length == 0 || images?.length == 1) && <Image src={images?.length > 0 ? images[0]?.url : "/placeholder.svg"} alt={images?.length > 0 ? (images[0]?.alt ?? title) : "Aucune photo"} width={0} height={0} sizes='100vw' className={`rounded-3xl w-full ${!images || images?.length == 0 ? "aspect-[9/10]" : "h-auto"} h-auto md:aspect-[16/12] xl:aspect-[16/10] object-cover max-h-[70svh]`} />}
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex md:items-start flex-col gap-6 lg:gap-8 w-auto'>
            <div className='flex flex-col'>
                {categories?.length > 0 && <motion.div variants={fadeUp}>
                    <Heading level="6" className="opacity-70">{categories?.map((item, index) => {
                        return item ? `${index > 0 ? ` - ${item.title}` : item.title}` : null
                    })}</Heading>
                </motion.div>}
                <motion.div variants={fadeUp}>
                    <Heading level="2" tag="h1" className="mt-4">{title}</Heading>
                </motion.div>
                <motion.div variants={fadeUp}>
                    <Heading tag="p" level="3" className="mt-6">
                        Prix :
                        {price && <> <strong className='text-red-700'>{new Intl.NumberFormat("fr-FR").format(price)} €</strong></>}
                        {(minPrice && !maxPrice) && <> à partir de <strong className='text-red-700'>{new Intl.NumberFormat("fr-FR").format(minPrice)} €</strong></>}
                        {(minPrice && maxPrice) && <> de <strong className='text-red-700'>{new Intl.NumberFormat("fr-FR").format(minPrice)}</strong> à <strong className='text-red-700'>{new Intl.NumberFormat("fr-FR").format(maxPrice)} €</strong></>}
                    </Heading>
                </motion.div>
            </div>
            {text && <motion.div variants={fadeUp} className='post-text text-[14px]'>
                <Text>
                    {text}
                </Text>
            </motion.div>}
            <motion.div variants={fadeUp}>
                <Button href={available ? "#me-contacter" : "#"} disabled={!available} className="mt-1 lg:mt-0">{available ? "Me contacter" : "Indisponible"}</Button>
            </motion.div>
        </motion.div>
    </section>
}

export default Product