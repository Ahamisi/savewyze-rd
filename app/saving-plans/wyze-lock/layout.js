import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Savewyze Lock',
  description: 'Achieve Financial Freedom with Savewyze!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://fonts.cdnfonts.com/css/bromny-black" rel="stylesheet"/>
      <body>{children}</body>
    </html>
  )
}
