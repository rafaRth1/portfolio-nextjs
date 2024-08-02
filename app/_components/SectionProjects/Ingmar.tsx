'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { BgColorDetect, Reveal } from '@/components/';
import LaptopMockupMovies from '@/public/mockups/ingmar/devices/ingmar_mockup_desktop.png';
import TabletMockupIngmar from '@/public/mockups/ingmar/devices/ingmar_mockup_tablet.png';
import PhoneMockupIngmar from '@/public/mockups/ingmar/devices/ingmar_mockup_phone.png';
import { imagesIngmar } from '@/public/mockups/ingmar';
import { IoLogoReact } from 'react-icons/io5';
import { SiExpress } from 'react-icons/si';
import { BiLogoMongodb, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';

export default function Ingmar() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='mb-10'>
			<div className='relative'>
				<div className='absolute w-full h-full gradients-one flex justify-evenly items-center z-10'>
					<div className='w-[250px] h-[250px] rounded-full bg-[#3730A3] blur-[150px]'></div>
					<div className='w-[250px] h-[250px] rounded-full bg-[#B84234] blur-[150px]'></div>
					<div className='w-[250px] h-[250px] rounded-full bg-[#BF8732] blur-[150px]'></div>
				</div>

				<h1 className='text-7xl text-neutral-100 text-center font-semibold'>Proyecto Ingmar</h1>

				<div className='flex items-center flex-col-reverse md:flex-row relative z-30 my-10'>
					<picture className='md:mr-10'>
						<Reveal>
							<Image
								src={LaptopMockupMovies}
								alt='Laptop Image Project'
								loading='lazy'
								placeholder='empty'
							/>
						</Reveal>
					</picture>

					<div>
						<h2 className='text-3xl font-medium'>Descripción</h2>
						<p className='text-xl text-neutral-300 mt-5'>
							Esta es una aplicación de peliculas realizada para ver datos, leer sus descripciones, ver informaciones o ver
							ciertos trailers.
						</p>
					</div>
				</div>

				<div className='relative flex items-center flex-col-reverse md:flex-row z-20 mb-10'>
					<div className='basis-1/2 mr-10'>
						<h2 className='text-3xl font-medium mb-4'>¿Cual fue mi dificultad en este proyecto?</h2>

						<ul className='list-disc text-xl text-neutral-300 ml-5'>
							<li>Representar las imagenes de una forma agradable por si el usuario tenía internet baja.</li>
							<li>Recrear un carousel de imagenes de manera responsiva.</li>
							<li>Hacer "Lazy Layout" a archivos.</li>
						</ul>
					</div>

					<picture className='basis-1/2 mb-10 md:mb-0'>
						<Reveal>
							<Image
								src={TabletMockupIngmar}
								alt='Tablet Thullo'
								loading='lazy'
								placeholder='empty'
							/>
						</Reveal>
					</picture>
				</div>

				<div className='flex items-center flex-col md:flex-row relative z-20'>
					<picture className='basis-1/2 mb-10 md:mb-0 md:mr-10'>
						<Reveal>
							<Image
								src={PhoneMockupIngmar}
								alt='Phone Image Project'
								className='mx-auto'
								width={300}
							/>
						</Reveal>
					</picture>

					<div className='flex basis-1/2 items-center flex-col md:block'>
						<h2 className='text-3xl font-medium text-center md:text-left'>¿Cuáles fueron las herramientas que utilize?</h2>

						<div className='flex justify-center flex-wrap md:flex-nowrap md:justify-start items-center gap-3 my-10'>
							<div className='flex flex-col items-center'>
								<IoLogoReact
									className='text-[#00CCFF]'
									size={40}
								/>
								<span>ReactJS</span>
							</div>
							<div className='flex flex-col items-center'>
								<BiLogoTailwindCss
									className='text-[#06B6D4]'
									size={40}
								/>
								<span>TailwindCSS</span>
							</div>
							<div className='flex flex-col items-center'>
								<BiLogoTypescript
									className='text-[#007ACC]'
									size={40}
								/>
								<span>TypeScript</span>
							</div>
							<div className='flex flex-col items-center'>
								<SiExpress
									className='text-neutral-400'
									size={40}
								/>
								<span>ExpressJS</span>
							</div>
							<div className='flex flex-col items-center'>
								<BiLogoMongodb
									className='text-[#00ff7b]'
									size={40}
								/>
								<span>MongoDB</span>
							</div>
						</div>

						<div className='flex'>
							<Button
								color='secondary'
								size='lg'
								className='mr-10'>
								<Link
									href='https://movies-app-frontend-rafarth1.netlify.app'
									target='_blank'>
									Vista Previa
								</Link>
							</Button>
							<Button size='lg'>
								<Link
									href='https://github.com/rafaRth1/movies-app'
									target='_blank'>
									Repositorio
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>

			{!isActive ? (
				<Reveal>
					<div className='grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-2 sm:gap-5 mb-60 mt-32'>
						{imagesIngmar.map((image) => (
							<BgColorDetect
								key={image.id}
								src={image.src}
								className='sm:odd:translate-y-24'
							/>
						))}
					</div>
				</Reveal>
			) : (
				<div className='flex justify-center mt-5'>
					<button
						className='text-neutral-300 p-3 bg-[#6F2A71] rounded-full'
						onClick={() => setIsActive(true)}>
						Ver mas imagenes
					</button>
				</div>
			)}
		</div>
	);
}
