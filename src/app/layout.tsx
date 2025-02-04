import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/common/nav';
import Footer from '@/components/common/footer';
import { poppins } from '@/config/fonts';

export const metadata: Metadata = {
  title: 'yui880.dev',
  description: 'Archive',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} flex flex-col bg-white font-Pretendard`}>
        <Nav isTransparent={true} />
        <div className="pt-14">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
