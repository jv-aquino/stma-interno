import './globals.css'

export const metadata = {
  title: 'STMA Interno',
  description: 'Sistema interno da Seção Técnica de Materiais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
