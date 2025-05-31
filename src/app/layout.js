import { raleway } from './fonts';
import { headers } from 'next/headers';
import { GlobalContextProvider } from '../context/Global';
import { Data } from '../lib/Global';
import "./globals.css";

export default async function RootLayout({ children }) {
  const data = await Data()
  const nonce = (await headers()).get('x-nonce')

  return <html lang="fr">
    <body className={`${raleway.variable}`} nonce={nonce}>
      <GlobalContextProvider data={data}>
        {children}
      </GlobalContextProvider>
    </body>
  </html>
}

export const metadata = {
  title: "Elomade",
  index: "noindex",
  follow: "nofollow",
  charSet: "utf-8",
  manifest: "/manifest.json",
  icons: {
    apple: [
      { url: '/icon-192x192.png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ]
  }
}

export const viewport = {
  width: "device-width, initial-scale=1, maximum-scale=2",
  themeColor: 'white'
}
