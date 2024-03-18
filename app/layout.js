import 'bootstrap/dist/css/bootstrap.min.css';
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  // weight: '600', 
  subsets: ["latin"] 
});

export const metadata = {
  title: "HireJob - Peworld",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
