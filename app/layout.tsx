import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attorney Web System",
  description: "Case management for modern law firms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen bg-gray-50 text-slate-900`}>
        
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
          <div className="h-16 flex items-center px-6 border-b border-gray-200 font-bold text-lg text-slate-800">
            ⚖️ Attorney System
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/" className="block px-4 py-2 rounded-md hover:bg-gray-100 text-slate-700 font-medium">
              Dashboard
            </Link>
            <Link href="/clients" className="block px-4 py-2 rounded-md hover:bg-gray-100 text-slate-700 font-medium">
              Clients
            </Link>
            <Link href="/matters" className="block px-4 py-2 rounded-md hover:bg-gray-100 text-slate-700 font-medium">
              Matters
            </Link>
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* TOPBAR */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
            <h1 className="text-xl font-semibold text-slate-800">Overview</h1>
            <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
              AA
            </div>
          </header>
          
          {/* PAGE CONTENT */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}