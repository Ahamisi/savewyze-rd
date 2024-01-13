import { Inter } from 'next/font/google'
import '../../../app/globals.css'


export const metadata = {
  title: 'Wyze Target',
  description: 'Achieve Financial Freedom with Savewyze!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://fonts.cdnfonts.com/css/bromny-black" rel="stylesheet"/>
      <body class="overflow-x-hidden">{children}</body>
    
    </html>
  )
}
