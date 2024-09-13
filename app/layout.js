// app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

import { AudioProvider } from "./AudioContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aung Pyae Soe Portfolio",
  description: "A portfolio website showcasing projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AudioProvider>
          <CustomCursor />
          <Header />
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
