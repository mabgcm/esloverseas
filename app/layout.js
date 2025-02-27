'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import Navbar from './components/Navbar';
import ClientOnly from './components/ClientOnly';



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <Navbar />
          <main>{children}</main>
        </ClientOnly>
      </body>
    </html>
  );
}