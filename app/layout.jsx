import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "sonner"
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600', '800'],
})

export const metadata = {
  title: 'Paramount Energy Group | Electrical Services',
  description: 'Professional electrical services for residential, commercial, and industrial clients.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}