import Footer from "components/footer";
import NavBar from "components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomePage"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-dark dark:text-white`}>
        <NavBar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
