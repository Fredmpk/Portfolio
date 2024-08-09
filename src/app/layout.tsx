import { Navbar } from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "Mein Portfolio",
  description: "Mein persönliches Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        {children}
        <footer>{/* Fußzeileninhalte hier */}</footer>
      </body>
    </html>
  );
}
