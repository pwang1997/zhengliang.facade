import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Projects | Zhengliang Wang"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  )
}
