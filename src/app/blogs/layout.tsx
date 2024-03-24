import NavBar from "components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogs | Zhengliang Wang"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className='content container min-h-screen max-w-5xl flex-grow pt-4 lg:mx-auto'>
          {children}
        </div>
      </body>
    </html>
  );
}
