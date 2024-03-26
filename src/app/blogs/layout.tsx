import NavBar from "components/navbar";
import PageIntro from "components/page-intro";
import BundledMetricsPanel from "components/side-panel/BundledMetricsPanel";
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
      <body className={`${inter.className} dark:bg-medium dark:text-white`}>
        <NavBar />
        <div className='content container min-h-screen max-w-7xl flex-grow pt-4 lg:mx-auto'>
          <PageIntro name="Blogs" />
          <div className='container flex justify-between gap-x-24'>
            {children}
            <BundledMetricsPanel />
          </div>
        </div>
      </body>
    </html>
  );
}
