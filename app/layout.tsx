import '@/styles/globals.scss';
import { League_Spartan } from 'next/font/google';
import RotatingArcs from './LayoutComponents/RotatingArcs';
import ProceedBtn from './LayoutComponents/ProceedBtn';
import Navbar from './LayoutComponents/Navbar';
import { SectionContextProvider } from './context/section';
import SiteHeader from './LayoutComponents/SiteHeader';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export const metadata = {
  title: 'Brett Cornick',
  description:
    'Brett is a designer, developer, and scientist with 7+ years of professional experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SiteHeader />
      <body className={leagueSpartan.className}>
        <SectionContextProvider>
          <Navbar />
          <RotatingArcs />
          {children}
          <ProceedBtn />
        </SectionContextProvider>
      </body>
    </html>
  );
}
