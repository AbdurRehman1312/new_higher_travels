import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialBar from "./components/SocialBar";
import "./globals.css";


export const metadata = {
  title: "New Higher Travels",
  description: "Explore the world with New Higher Travels",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`antialiased`}>
        {/* <SocialBar /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
