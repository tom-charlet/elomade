'use client'

import ReactMarkdown from 'react-markdown'

const Text = ({ children, className }) => {

    return <ReactMarkdown>{children}</ReactMarkdown>
}

export default Text