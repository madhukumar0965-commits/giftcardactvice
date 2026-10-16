import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mcgift GiftCardMall/MyGift Guide: Balance / Card Help",
  description:
    "Looking for Mcgift GiftCardMall/MyGift information? Read independent guidance on GiftCardMall balances, MyGift card help, safe access and declined transactions.",
  metadataBase: new URL("https://giftcardactive.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: true,
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
