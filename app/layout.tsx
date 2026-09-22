import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans=Geist({variable:"--font-geist-sans",subsets:["latin"]});
const geistMono=Geist_Mono({variable:"--font-geist-mono",subsets:["latin"]});
export const metadata:Metadata={metadataBase:new URL("https://aryanharoon.com"),title:"Aryan Haroon | Software Engineer",description:"Aryan Haroon is a Computer Science & Engineering student at UC Merced building software, web applications, and AI projects.",openGraph:{title:"Aryan Haroon | Software Engineer",description:"Software engineering, full-stack development, and AI/ML.",url:"https://aryanharoon.com",siteName:"Aryan Haroon",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>}
