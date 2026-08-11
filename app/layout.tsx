import { Inter } from 'next/font/google'
import Header from './components/Header'
import './globals.css'
import Footer from './components/Footer'
import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

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
      </body>
    </html>
  )
}
