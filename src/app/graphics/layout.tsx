import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Graphics | Zhengliang Wang"
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
