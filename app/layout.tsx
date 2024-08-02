import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import { Providers } from './providers';
import Navigation from '@/components/navigation/navigation';
import './globals.css';

const bai_jamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
	title: 'Rafael Alvarez',
	description: 'Portafolio de Rafael Alvarez',
	icons: {
		icon: '/abstract-item-1.png',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className='dark scroll-smooth'
			style={{ scrollBehavior: 'smooth' }}>
			<body className={`${bai_jamjuree.className}`}>
				<Navigation />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
