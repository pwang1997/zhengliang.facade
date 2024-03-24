
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="container mx-auto flex flex-col gap-2 p-4 m-4 w-full max-w-2xl">{children}</div>;
  }
  