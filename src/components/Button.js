import Link from 'next/link';

const Button = ({ children, href, tag, className, ...props }) => {
    const Balise = tag ?? "button";

    let style = `flex justify-center text-center bg-red-800 text-beige-100 px-6 py-4 rounded-full cursor-pointer font-medium ${className ?? ""}`;

    if (href) return <Link href={href} {...props} className={style}>{children}</Link>
    else return <Balise {...props} className={style}>{children}</Balise>
}

export default Button
