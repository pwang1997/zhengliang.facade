import NavBar from "components/navbar";
import PageIntro from "components/page-intro";
import BundledMetricsPanel from "components/side-panel/BundledMetricsPanel";
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
    <html lang="en">
      <body className={`${inter.className} dark:bg-medium dark:text-white`}>
        <NavBar />
        <div className='content container min-h-screen max-w-7xl flex-grow pt-4 lg:mx-auto'>
          <PageIntro name="Projects" />
          <div className='container flex justify-between'>
            {children}
            <BundledMetricsPanel />
          </div>
        </div>
      </body>
    </html>
  )
}
