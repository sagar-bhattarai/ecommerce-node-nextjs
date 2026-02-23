import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config/config";
import AppProvider from '@/redux/provider';
import MainLayout from "@/layouts/MainLayout"

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
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <AppProvider>
          <MainLayout>
            <Header />
            <main className="min-h-screen dark:text-white dark:bg-darkBackground light:bg-lightBackground">{children}</main>
            <Footer />
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
