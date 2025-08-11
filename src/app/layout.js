import "./globals.css";


export const metadata = {
  title: "New Higher Travels",
  description: "Explore the world with New Higher Travels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
