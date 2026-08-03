import { Inter } from 'next/font/google'
import Header from './components/Header'
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
<main className="mx-auto px-6 pt-12 md:px-12">
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}