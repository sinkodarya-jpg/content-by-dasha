import Header from './components/Header'
import './globals.css'
import Footer from './components/Footer'
import styles from './layout.module.scss'
import ContactButton from './components/ContactButton'
import { Inter } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.siteContent}>{children}</main>
        <Footer/>
        <ContactButton />
      </body>
    </html>
  )
}
