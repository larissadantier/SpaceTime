import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjure = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW SpaceTime',
  description:
    'Uma cápsula do tempo construída em React, Next.js, TailwindCSS e TypeScrit',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjure.variable} bg-gray-900 font-sans text-gray-100`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
