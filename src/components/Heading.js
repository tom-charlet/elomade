const Heading = ({ children, className, level, tag, ...props }) => {

    let Balise = 'h' + level
    let style = ' '

    if (tag) { Balise = tag }

    switch (level) {
        case '1':
            style += 'text-[32px] lg:text-[52px] font-semibold leading-[120%]'
            break
        case '2':
            style += 'text-[48px] font-semibold leading-[120%] '
            break
        case '3':
            style += 'text-[20px] font-medium leading-[140%] '
            break
        case '4':
            style += 'text-[16px] font-medium leading-[140%] '
            break
        default: false
    }

    return <Balise {...props} className={`${style} ${className ?? ''}`}>{children}</Balise>
}

export default Heading;
