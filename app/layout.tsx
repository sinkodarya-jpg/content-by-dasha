import { Inter } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

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
        <main className="pt-12 px-6 max-w-screen-lg mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}