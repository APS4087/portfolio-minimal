// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Aung Pyae Soe Portfolio",
  description: "A portfolio website showcasing projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
