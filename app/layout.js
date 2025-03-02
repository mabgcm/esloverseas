'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import ClientOnly from './components/ClientOnly';
import { Analytics } from "@vercel/analytics/react"



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <Analytics />
        <ClientOnly>
          {/* <Navbar /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </ClientOnly>
      </body>
    </html>
  );
}