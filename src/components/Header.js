import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('./Button'))

const Header = () => {
    return <header className='absolute top-0 left-0 w-full z-50'>
        <nav className='responsive-container h-28 flex items-center justify-between'>
            <Link href="/">
                <Image src="./logo.svg" sizes='100vw' alt="Elomade" width={0} height={0} className='h-10 w-auto' />
            </Link>
            <ul className='flex items-center gap-10'>
                <li>
                    <Link href="#les-creations" className='font-medium'>Les créations</Link>
                </li>
                <li>
                    <Button href="#me-contacter">Me contacter</Button>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header