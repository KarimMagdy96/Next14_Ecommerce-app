"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_conponents/Header";
import { CartContext } from "./_context/CartContext";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import Footer from "./_conponents/Footer";
import { useState } from "react";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <html lang="en">
          <body className={inter.className}>
            <SignedOut></SignedOut>
            <SignedIn></SignedIn>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
