const Heading = ({ children, className, level, tag, ...props }) => {

    let Balise = 'h' + level
    let style = ' '

    if (tag) { Balise = tag }

    switch (level) {
        case '1':
            style += 'text-[28px] lg:text-[40px] font-semibold leading-[130%]'
            break
        case '2':
            style += 'text-[32px] lg:text-[40px] font-semibold leading-[130%] '
            break
        case '3':
            style += 'text-[18px] lg:text-[20px] font-medium leading-[160%] '
            break
        case '4':
            style += 'text-[16px] font-medium leading-[160%] '
            break
        case '5':
            style += 'text-[14px] font-medium leading-[160%] '
            break
        default: false
    }

    return <Balise {...props} className={`${style} ${className ?? ''}`}>{children}</Balise>
}

export default Heading;
