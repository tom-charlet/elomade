import { inter } from './fonts';
import { GlobalContextProvider } from '../context/Global';
import { Data } from '../lib/Global';
import "./globals.css";

export const metadata = {
  title: "Elomade",
  description: "Créations en crochet sur commande",
}


export default async function RootLayout({ children }) {
  const data = await Data()

  return <html lang="fr">
    <body className={`${inter.variable}`}>
      <GlobalContextProvider data={data}>
        {children}
      </GlobalContextProvider>
    </body>
  </html>
}