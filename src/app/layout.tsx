import Footer from "components/footer";
import NavBar from "components/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomePage"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scoll-smooth">
      <body className={`dark:bg-dark dark:text-white`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
