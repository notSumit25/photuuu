import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photos",
  description: "A web App To Store and Display Images",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
