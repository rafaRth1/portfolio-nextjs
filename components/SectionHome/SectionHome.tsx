import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import Character_Main from '../../public/characters/character-3d-main.png';
import Reveal from '../Reveal/Reveal';

export default function Home() {
	return (
		<section className='container-presentation container-custom flex items-center justify-center flex-col sm:flex-row sm:h-[70dvh] p-5'>
			<div className='basis-full'>
				<div className='presentation-name relative'>
					<div className='relative flex flex-col items-center z-30'>
						<h1 className='text-6xl md:text-7xl font-bold text-center text-neutral-300'>
							Hola, Soy
							<span className='block text-transparent bg-gradient-to-r from-[#DE2A75] to-[#BF8732] bg-clip-text'>
								Rafael Alvarez
							</span>
						</h1>

						<p className='text-xl text-neutral-300 mt-4 text-center font-semibold'>
							Desarrollador Frontend, dedicado en construir y mejorar aplicaciones web.
						</p>

						{/* <p className='text-xl mt-6 text-neutral-300 text-center sm:text-start'>
							Your feedback and appreciation are always welcome.
						</p> */}
					</div>
				</div>

				<div className='relative flex justify-center gap-6 z-30 mt-4'>
					<Link
						href='https://github.com/rafaRth1'
						target='_blank'
						className='flex items-center bg-neutral-300 text-neutral-800 font-semibold py-3 px-5
							rounded-xl'>
						<IoLogoGithub
							size={30}
							color='black'
						/>

						<span className='ml-2'>Github</span>
					</Link>

					<Link
						href='/'
						className='flex items-center bg-neutral-300 text-neutral-800 font-semibold py-3 px-5 rounded-xl'>
						<IoLogoLinkedin
							size={30}
							color='black'
						/>

						<span className='ml-2'>LinkedIn</span>
					</Link>
				</div>
			</div>

			<div className='basis-full'>
				<Reveal>
					<picture className='relative character-main'>
						<Image
							src={Character_Main}
							alt='Character Main 3D'
							className='relative z-30'
							width={700}
							height={700}
							placeholder='empty'
							priority={true}
						/>
					</picture>
				</Reveal>
			</div>
		</section>
	);
}
