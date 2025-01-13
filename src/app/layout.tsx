import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/common/nav';
import Container from '@/components/common/container';
import Footer from '@/components/common/footer';

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
      <body className="bg-background font-Pretendard">
        <Container>
          <Nav />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
