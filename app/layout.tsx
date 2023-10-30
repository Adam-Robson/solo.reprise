import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { Cairo_Play } from 'next/font/google'
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'
import './globals.css'

const cairo = Cairo_Play({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Robson | Portfolio',
  description: 'Built with Next, TypeScript, & Tailwind'
}

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={cairo.className} style={{
      backgroundImage: "url('/images/circlesun.png')",
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundClip: 'border-box',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
        <Navigation />
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense></body>
    </html>
  )
}
