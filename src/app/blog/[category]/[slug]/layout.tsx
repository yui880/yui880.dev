import { poppins } from '@/config/fonts';
import Container from '@/components/common/container';
import '../../../globals.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.variable} w-full bg-white font-Pretendard`}>
      <Container>{children}</Container>
    </div>
  );
}
