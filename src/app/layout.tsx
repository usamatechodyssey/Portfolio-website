import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "./components/footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

import Header from "./components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
