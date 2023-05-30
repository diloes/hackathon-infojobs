import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { OffersProvider } from '@/context/OffersContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Infojobs - Hackathon',
  description: 'Web para hackathon Infojobs - 2023',
  keywords: 'hackathon, infojobs, web, nextjs, typescript, midudev',
  author: 'diloes',
  icon: 'src/app/favicon.ico'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <OffersProvider>
          <Header />
          {children}
        </OffersProvider>
      </body>
    </html>
  )
}
