import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../Reveal/Reveal';
import LaptopMockupMovies from '../../public/mockups/laptop-mockup-movies.png';
import TabletMockupIngmar from '../../public/mockups/tablet-mockup-movies.png';
import PhoneMockupIngmar from '../../public/mockups/phone-mockup-movies.png';
import { BiLogoMongodb, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { IoLogoReact } from 'react-icons/io5';
import { SiExpress } from 'react-icons/si';

export default function Ingmar() {
	return (
		<div className='relative mb-10'>
			<div className='absolute w-full h-full gradients-one flex justify-evenly items-center z-10'>
				<div className='w-[250px] h-[250px] rounded-full bg-[#3730A3] blur-[150px]'></div>
				<div className='w-[250px] h-[250px] rounded-full bg-[#B84234] blur-[150px]'></div>
				<div className='w-[250px] h-[250px] rounded-full bg-[#BF8732] blur-[150px]'></div>
			</div>

			<div className='flex flex-col xl:flex-row items-center mb-10 z-30 relative'>
				<div className='flex flex-col basis-1/2'>
					<h3 className='text-2xl text-neutral-300 font-bold text-center md:text-left'>App Movie - Ingmar</h3>

					<p className='text-lg text-neutral-300 mt-5'>
						Esta es una aplicación de peliculas realizada para ver datos, leer sus descripciones, ver
						informaciones o ver ciertos trailers.
					</p>

					<p className='text-lg text-neutral-300 mt-5'>¿Cuál fue mi dificultad en este proyecto?</p>

					<ul className='list-disc text-lg text-neutral-300 ml-5'>
						<li>Representar las imagenes de una forma agradable por si el usuario tenía internet baja. </li>
						<li>Recrear un carousel de imagenes de manera responsiva.</li>
					</ul>

					<p className='text-lg text-neutral-300 mt-5'>¿Cuáles fueron las herramientas que utilize?</p>

					<div className='flex justify-center md:justify-start items-center gap-3 mt-4'>
						<IoLogoReact
							className='text-[#00CCFF]'
							size={40}
						/>
						<BiLogoTailwindCss
							className='text-[#06B6D4]'
							size={40}
						/>
						<BiLogoTypescript
							className='text-[#007ACC]'
							size={40}
						/>
						<SiExpress
							className='text-neutral-400'
							size={40}
						/>
						<BiLogoMongodb
							className='text-[#00ff7b]'
							size={40}
						/>
					</div>

					<div className='flex items-center gap-4 mt-6 justify-center md:justify-start'>
						<Link
							href='https://movies-app-frontend-rafarth1.netlify.app'
							target='_blank'
							className='block font-semibold bg-[#6F2A71] text-neutral-300 rounded-3xl py-2 px-5'>
							Demo
						</Link>

						<Link
							href='https://github.com/rafaRth1/movies-app'
							target='_blank'
							className='block font-semibold bg-white text-black rounded-3xl py-2 px-5'>
							Repositorio
						</Link>
					</div>
				</div>

				<picture className='basis-1/2 mt-10 xl:mt-0'>
					<Reveal>
						<Image
							src={LaptopMockupMovies}
							alt='Laptop Image Project'
						/>
					</Reveal>
				</picture>
			</div>

			<div className='flex justify-center items-center relative z-30'>
				<Reveal>
					<picture className='hidden lg:block md:basis-1/2'>
						<Image
							src='/characters/character-3d-right.png'
							alt='Personaje 3d'
							width={500}
							height={500}
						/>
					</picture>
				</Reveal>

				<div className='flex'>
					<picture>
						<Reveal>
							<Image
								src={TabletMockupIngmar}
								alt='Tablet Image Project'
								height={540}
							/>
						</Reveal>
					</picture>

					<picture className='grid place-items-end md:place-items-center'>
						<Reveal>
							<Image
								src={PhoneMockupIngmar}
								alt='Phone Image Project'
								height={440}
							/>
						</Reveal>
					</picture>
				</div>
			</div>
		</div>
	);
}
