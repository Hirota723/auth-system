import type { Metadata } from "next";
import localFont from "next/font/local";
import { getAuthSession } from "@/lib/nextauth";
import "./globals.css";
import Navigation from "@/components/auth/Navigation";
import AuthProvider from "@/components/providers/AuthProvider";
import ToastProvider from "@/components/providers/ToastProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next.js+DRF入門",
  description: "Next.js+DRF入門",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // 認証情報取得
  const user = await getAuthSession();

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Navigation user={user} />
            <ToastProvider />

            <main className="container mx-auto max-w-screen-md flex-1 px-2">
              {children}
            </main>

            {/* フッター */}
            <footer className="py-5">
              <div className="text-center text-sm">
                Copyright © All rights reserved |{" "}
                <a
                  href="https://www.youtube.com/@fullstackchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  FullStackChannel
                </a>
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
