import Link from "next/link"

const Footer = () => {
    return <section className="bg-beige-300">
        <div className="responsive-container h-[100px] flex items-center justify-between">
            <p>2025 - Tous droits reservées</p>
            <ul className="flex items-center gap-6">
                <li>
                    <Link href="/mentions-legales" className="font-medium">Mentions légales</Link>
                </li>
                <li>
                    <Link href="/politique-de-confidentialite" className="font-medium">Politique de confidentialité</Link>
                </li>
                <li>Crée par Tom Charlet</li>
            </ul>
        </div>
    </section>
}

export default Footer