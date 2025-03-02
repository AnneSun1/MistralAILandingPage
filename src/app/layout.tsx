import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Roboto } from 'next/font/google'

const roboto = Roboto({  weight: ['400', '700'], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontier AI | Mistral AI",
  description: "Configurable AI for all builders",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
