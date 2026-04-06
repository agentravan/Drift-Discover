import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ExitPopup from "@/components/ExitPopup";
import FloatingButtons from "@/components/FloatingButtons";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Drift & Discover | Premium Group Trips & Corporate Tours",
  description: "Experience premium group trips, corporate tours, and custom travel packages from Delhi NCR. Travel Together, Experience More.",
  keywords: "Group Trips India, Weekend Trips Delhi, Budget Travel Packages, Premium Travel, Drift & Discover",
  openGraph: {
    title: "Drift & Discover",
    description: "Premium Travel Experiences from Delhi NCR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <ExitPopup />
        <FloatingButtons />
        <Toaster position="bottom-center" toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          }
        }} />
      </body>
    </html>
  );
}
