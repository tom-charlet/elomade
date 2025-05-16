import "./globals.css";
import { inter } from './fonts';
import dynamic from "next/dynamic";

export const metadata = {
  title: "Elomade",
  description: "Créations en crochet sur commande",
}

const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/Footer'))

export default function RootLayout({ children }) {
  return <html lang="fr">
    <body className={`${inter.variable}`}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </body>
  </html>
}
