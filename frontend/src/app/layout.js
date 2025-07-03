'use client';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePathname } from 'next/navigation';
import localFont from "next/font/local";
import useAuth from '../../hooks/useAuth';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);
  useAuth(setUser);

  const pathname = usePathname();
  console.log(pathname); // Check the current path

  // Check if the current route is the list page
  const isListPage = pathname === '/venue/list'; // Adjust this based on your actual route

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {!isListPage && <Header />}
        <ToastContainer/>
        {children}
        {!isListPage && <Footer />}
      </body>
    </html>
  );
}