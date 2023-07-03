import "./globals.css";
import { Inter } from "next/font/google";
import TopNav from "@/components/topNav";
import StickyNav from "@/components/stickyNav";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Service",
  description: "Best service you can get!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
