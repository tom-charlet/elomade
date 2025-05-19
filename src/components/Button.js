import Link from 'next/link';
import dynamic from 'next/dynamic'

const Icon = dynamic(() => import('./Icon'))

const Button = ({ children, href, tag, className, icon, variante, reverse, size, ...props }) => {
    const Balise = tag ?? "button";

    let styleButton = `flex justify-center items-center text-center rounded-full cursor-pointer font-medium ${(icon && !children) ? "size-14" : "pl-6 pr-5 py-4 gap-2"} ${className ?? ""}`;
    let styleIcon = ` ${size == "sm" ? "size-4" : "size-5"}`

    switch (variante) {
        case "fill-beige": {
            styleButton += " bg-beige-300"
            styleIcon += " fill-red-800"
        } break
        case "stroke-beige": {
            styleButton += " border border-beige-300"
            styleIcon += " fill-beige-300"
        } break
        case "stroke-red": {
            styleButton += " border border-red-800"
            styleIcon += " fill-red-800"
        } break
        default: {
            styleButton += " bg-red-800 text-beige-300"
            styleIcon += " fill-beige-300"
        }
    }

    if (!reverse) styleIcon += " -order-1"

    if (href) return <Link href={href} {...props} className={styleButton}>{children}{icon && <Icon name={icon} fill="auto" className={styleIcon} />}</Link>
    else return <Balise {...props} className={styleButton}>{children}{icon && <Icon name={icon} fill="auto" className={styleIcon} />}</Balise>
}

export default Button
