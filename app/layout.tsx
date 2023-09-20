import {Footer, Navbar} from '@/components';
import "./globals.css";

export const metadata = {
  title: "RickCar",
  description: "Temukan mobil terbaik di dunia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
