import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Mitr } from 'next/font/google'
import { FaWhatsapp } from "react-icons/fa";

const mitr = Mitr({ 
  subsets: ['latin'], 
     weight: ['200','300','400' , '500' , '600' , '700' ],
     style: 'normal' ,
     variable: '--font-mitr'
     })
     
export const metadata: Metadata = {
  title: "Nextgen Interface",
  description: "Professional web and mobile development, UI/UX design, and graphic design services. Transforming ideas into stunning digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` m-0 p-0 `}>
      <body
        className={ `${mitr.variable} text-blue font-sans m-0 p-0 transition-all duration-200 antialiased flex flex-col justify-between min-h-screen `}>
        <Header />
        <main className="flex-1 relative">{children}</main>
        {/* <button type='button' className="bg-green-600 w-5 h-5 rounded-full shadow-sm fixed bottom-0 right-6 md-hidden" >
          <FaWhatsapp />
        </button> */}
        <Footer />
      </body>
    </html>
  );
}
function localFont(arg0: { src: string; }) {
  throw new Error("Function not implemented.");
}

