import localFont from "next/font/local"; // Mengimpor fungsi localFont dari Next.js
import "./globals.css"; // Mengimpor file CSS global
import { metadata } from "./metadata"; // Mengimpor metadata

const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Sumber file font Geist Sans
  variable: "--font-geist-sans", // Variabel CSS untuk font Geist Sans
  weight: "100 900", // Rentang bobot font
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Sumber file font Geist Mono
  variable: "--font-geist-mono", // Variabel CSS untuk font Geist Mono
  weight: "100 900", // Rentang bobot font
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

export { geistSans, geistMono }; // Export the font variables
