import { Inter, DM_Sans, Bai_Jamjuree } from 'next/font/google';
import { Providers } from './providers';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation/Navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const dm_sans = DM_Sans({ subsets: ['latin'], weight: ['400'] });
const bai_jamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
	title: 'Rafael Alvarez',
	description: 'Portafolio de Rafael Alvarez',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className='scroll-smooth'
			style={{ scrollBehavior: 'smooth' }}>
			<body className={`${bai_jamjuree.className}`}>
				<Navigation />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
