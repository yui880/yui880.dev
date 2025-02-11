import { poppins } from '@/config/fonts';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${poppins.variable} w-full bg-gray-300 font-Pretendard`}>{children}</div>;
}
