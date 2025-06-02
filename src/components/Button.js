import Link from 'next/link';
import dynamic from 'next/dynamic'

const Icon = dynamic(() => import('./Icon'))

const Button = ({ children, href, tag, className, icon, variante, reverse, size, ...props }) => {
    const Balise = tag ?? "button";

    let styleButton = `flex justify-center items-center gap-2 text-center rounded-full cursor-pointer font-semibold duration-800 ease-smooth-out group ${icon ? (children ? (reverse ? "pl-6 pr-5 py-4" : "pr-6 pl-5 py-4") : "size-14") : "px-6 py-4"} ${className ?? ""}`;
    let styleIcon = `duration-800 ease-smooth-out ${size == "sm" ? "size-4" : "size-5"}`

    switch (variante) {
        case "stroke-beige": {
            styleButton += " border border-beige-300 hover:border-beige-100 hover:text-beige-100 hover:scale-105"
            styleIcon += " fill-beige-300 group-hover:fill-beige-100"
        } break
        case "stroke-red": {
            styleButton += " border border-red-800 hover:border-red-700 hover:text-red-700 hover:scale-105"
            styleIcon += " fill-red-800 group-hover:fill-red-700"
        } break
        case "fill-beige": {
            styleButton += " text-red-800 bg-beige-300 hover:bg-beige-100 hover:scale-105"
            styleIcon += " fill-red-800 group-hover:fill-red-700"
        } break
        case "fill-red": default: {
            styleButton += " bg-red-800 text-beige-300 hover:bg-red-700 hover:scale-105"
            styleIcon += " fill-beige-300"
        }
    }

    if (!reverse) styleIcon += " -order-1"

    if (href) return <Link href={href} {...props} className={styleButton}>{children}{icon && <Icon name={icon} fill="auto" className={styleIcon} />}</Link>
    else return <Balise {...props} className={styleButton}>{children}{icon && <Icon name={icon} fill="auto" className={styleIcon} />}</Balise>
}

export default Button
