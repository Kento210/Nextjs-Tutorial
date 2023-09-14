export const metadata = {
  title: 'CatImage-App',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
      <body>
        <h1>Header</h1>
        {children}
      </body>
      </head>
    </html>
  )
}
