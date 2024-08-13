import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "Frederik König",
  description: "Mein persönliches Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
