import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ihsan Talent & Staffing B.V. - Professionals with expertise and character',
  description: 'We deliver highly qualified professionals for public, corporate, and societal organizations. Finance & Control, ESG & Sustainability, Legal & Governance, and Social Care professionals.',
  icons: {
    icon: '/images/logo-256.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js" defer></script>
      </head>
      <body className="antialiased bg-white text-gray-900 font-body">
        {children}
      </body>
    </html>
  )
}