import type { Metadata } from "next"
import { Inter_Tight, Anek_Telugu } from "next/font/google"
import "./styles/globals.css"
import { cn } from "@/lib/utils"

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-primary',
})

const anekTelugu = Anek_Telugu({
  subsets: ['latin'],
  variable: '--font-secondary',
})

export const metadata: Metadata = {
  title: "WX+",
  description: "Gerencie suas finanças com facilidade",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={cn(interTight.variable, anekTelugu.variable)}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}