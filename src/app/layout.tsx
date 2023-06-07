import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stock price prediction',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="max-w-screen-xl min-h-screen px-16 flex flex-column justify-between">
          {children}
        </div>
      </body>
    </html>
  )
}

// add navbar and footer here
