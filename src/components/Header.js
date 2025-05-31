import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return <header className='absolute top-10 left-0 w-full z-40 flex items-center justify-center'>
        <Link href="/">
            <Image src="/logo.svg" sizes='100vw' alt="Elomade" width={0} height={0} className='h-10 w-auto' />
        </Link>
    </header>
}

export default Header