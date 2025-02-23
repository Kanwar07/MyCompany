import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Company",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
