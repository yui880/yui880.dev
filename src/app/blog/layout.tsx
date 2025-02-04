import { poppins } from '@/config/fonts';
import Container from '@/components/common/container';
import Footer from '@/components/common/footer';
import '../globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.variable} bg-white font-Pretendard`}>
      <Container>
        {children}
        <Footer />
      </Container>
    </div>
  );
}
