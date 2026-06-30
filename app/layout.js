export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white p-4 shadow-sm">
          <h1 className="text-2xl font-bold text-blue-600">MahaVenture</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
