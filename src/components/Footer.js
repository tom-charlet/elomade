import Link from "next/link"

const Footer = () => {
    return <section className="bg-beige-300">
        <div className="responsive-container py-10 lg:py-0 lg:h-[100px] flex flex-col-reverse gap-8 lg:flex-row items-center justify-between text-center">
            <p>© 2025 - Tous droits reservées</p>
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <li>
                    <Link href="/mentions-legales" className="font-semibold hover:text-red-700 duration-400 ease-smooth-out">Mentions légales</Link>
                </li>
                <li>
                    <Link href="/politique-de-confidentialite" className="font-semibold hover:text-red-700 duration-400 ease-smooth-out">Politique de confidentialité</Link>
                </li>
            </ul>
        </div>
    </section>
}

export default Footer