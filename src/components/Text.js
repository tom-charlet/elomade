'use client'

import ReactMarkdown from 'react-markdown'

const Text = ({ children }) => {

    return <ReactMarkdown>{children}</ReactMarkdown>
}

export default Text