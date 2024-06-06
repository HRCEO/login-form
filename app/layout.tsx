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
      <body className=" text-white mx-auto max-w-screen-sm bg-gray-900">
        {children}
      </body>
    </html>
  );
}
