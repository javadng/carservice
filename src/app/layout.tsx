import "./globals.css";
import { Inter } from "next/font/google";
import TopNav from "@/components/topNav";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarServ",
  description: "Best service you can get!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <TopNav />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
