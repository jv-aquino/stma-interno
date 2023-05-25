import './globals.css';
import { Inter, Quicksand } from "next/font/google"
import '@fontsource/material-icons';

const inter = Inter({
  subsets: ["latin"],
  weight: ['400','500','700'],
  variable: '--font-inter'
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ['500','700'],
  variable: '--font-quicksand'
});

export const metadata = {
  title: 'STMA Interno',
  description: 'Sistema interno da Seção Técnica de Materiais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable + " " + quicksand.variable}>
      <body>{children}</body>
    </html>
  )
}
