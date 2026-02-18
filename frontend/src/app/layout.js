import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/products/Banner";
import config from "@/config/config";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export const metadata = {
  title: config.appName,
  description: "Online Shopping",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header/>
        <Banner/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
