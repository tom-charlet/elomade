import Link from 'next/link';
import dynamic from 'next/dynamic'

const Icon = dynamic(() => import('./Icon'))

const Button = ({ children, href, tag, className, icon, variante, reverse, size, ...props }) => {
    const Balise = tag ?? "button";

    let styleButton = `flex justify-center items-center text-center rounded-full cursor-pointer ${(icon && !children) ? "size-14" : "px-6 py-4 gap-3"} ${className ?? ""}`;
    let styleIcon = `size-5`

    switch (variante) {
        case "fill-beige": {
            styleButton += " bg-beige-300"
            styleIcon += " fill-red-800"
        } break
        case "stroke-beige": {
            styleButton += " border border-beige-300"
            styleIcon += " fill-beige-300"
        }
        default: {
            styleButton += " bg-red-800 text-beige-300"
            styleIcon += " fill-beige-300"
        }
    }

    if (reverse) styleIcon += " -order-1"

    if (href) return <Link href={href} {...props} className={styleButton}>{icon && <Icon name={icon} fill="auto" className={styleIcon} />}{children}</Link>
    else return <Balise {...props} className={styleButton}>{icon && <Icon name={icon} fill="auto" className={styleIcon} />}{children}</Balise>
}

export default Button
