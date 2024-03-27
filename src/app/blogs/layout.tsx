import Footer from "components/footer";
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
    <>
      <NavBar />
      <div className='content container min-h-screen max-w-7xl flex-grow pt-4 lg:mx-auto'>
        {children}
      </div>
      <Footer />
    </>

  );
}
