import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Service",
  description: "Next App Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='flex justify-center items-center w-screen h-screen bg-black'>{children}</body>
    </html>
  );
}
