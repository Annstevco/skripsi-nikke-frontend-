import type {Metadata} from "next";
import { Poppins} from "next/font/google";
import '@/ckeditor5/sample/styles.css';
import "./globals.css";


const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Pengumuman",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${poppins.variable}  `}>
        <body className="h-screen bg-cover bg-center " style={{backgroundImage: `url('')`}}>
        {children}
        </body>
        </html>
    );
}
