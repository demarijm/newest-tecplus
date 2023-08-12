import { RootLayout } from '@/components/RootLayout'
import { Analytics } from '@vercel/analytics/react';


import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Cass&York',
    default: 'Cass&York - Transforming Merchants Success',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <Analytics />
      </body>
    </html>
  )
}
