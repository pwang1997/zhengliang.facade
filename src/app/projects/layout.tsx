import { Inter } from "next/font/google";
import { Metadata } from "next/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projects | Zhengliang Wang"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='content container min-h-screen max-w-7xl flex-grow pt-4 lg:mx-auto'>
      {children}
    </div>
  )
}
