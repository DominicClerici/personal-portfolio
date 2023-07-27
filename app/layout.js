import "./globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
const satoshi = localFont({
  src: "./Satoshi-Variable.ttf",
  display: "swap",
  variable: "--font-satoshi",
})

export const metadata = {
  title: "Dominic Clerici",
  description:
    "The professional portfolio of Dominic Clerici, A computer science student at Indiana University.",
}

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${satoshi.variable}`} lang="en">
      <body>{children}</body>
    </html>
  )
}
