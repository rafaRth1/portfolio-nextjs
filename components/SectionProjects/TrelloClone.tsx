'use client';

import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../Reveal/Reveal';
import LaptopMockupThullo from '../../public/mockups/laptop-mockup-thullo.png';
import PhoneMockupThullo from '../../public/mockups/phone-mockup-thullo.png';
import TabletMockupThullo from '../../public/mockups/tablet-mockup-trello.png';
import TrelloMockup1 from '../../public/mockups/TrelloMockup1.png';
import TrelloMockup2 from '../../public/mockups/TrelloMockup2.png';
import TrelloMockup3 from '../../public/mockups/TrelloMockup3.png';
import TrelloMockup4 from '../../public/mockups/TrelloMockup4.png';
import TrelloMockup5 from '../../public/mockups/TrelloMockup5.png';
import { IoLogoReact } from 'react-icons/io5';
import { SiExpress } from 'react-icons/si';
import { BiLogoMongodb, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { useState } from 'react';

export default function TrelloClone() {
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<div className='mb-10'>
				<div className='relative'>
					<div className='absolute w-full h-full gradients-one flex justify-evenly items-center z-10'>
						<div className='w-[250px] h-[250px] rounded-full bg-[#FF0000] blur-[150px]'></div>
						<div className='w-[250px] h-[250px] rounded-full bg-[#0E9FF8] blur-[150px]'></div>
						<div className='w-[250px] h-[250px] rounded-full bg-[#3B82F6] blur-[150px]'></div>
					</div>

					<div className='flex flex-col-reverse xl:flex-row items-center mb-10 z-30 relative'>
						<picture className='xl:basis-1/2 mt-10 xl:mt-0'>
							<Reveal>
								<Image
									src={LaptopMockupThullo}
									alt='Laptop Image Project'
									loading='lazy'
									placeholder='empty'
								/>
							</Reveal>
						</picture>

						<div className='flex flex-col basis-1/2 md:ml-4'>
							<h3 className='text-2xl text-neutral-300 font-bold text-center md:text-left'>
								Thullo - Trello Clone
							</h3>

							<p className='text-lg text-neutral-300 mt-5'>
								Esta aplicación clon lo he realizado por un reto que propone el sitio DevChallenge cumpliendo
								las funcionalidades que indica en sí.
							</p>

							<p className='text-lg text-neutral-300 mt-5'>¿Cuál fue mi dificultad en este proyecto?</p>

							<ul className='list-disc text-lg text-neutral-300 ml-5'>
								<li>Hacer el tema del Drag and Drop con animaciones. </li>
								<li>Como almacenar y representar bien los datos desde la base de datos.</li>
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

							<div className='flex items-center justify-center md:justify-start gap-4 mt-6'>
								<Link
									href='https://thullo-clone-rafarth1.netlify.app'
									target='_blank'
									className='block font-semibold bg-[#6F2A71] text-neutral-300 rounded-3xl py-2 px-5'>
									Demo
								</Link>

								<Link
									href='https://github.com/rafaRth1/thullo-trello-clone'
									target='_blank'
									className='block font-semibold bg-white text-black rounded-3xl py-2 px-5'>
									Repositorio
								</Link>
							</div>
						</div>
					</div>

					<div className='flex items-center justify-center relative z-30'>
						<Reveal>
							<div className='flex md:basis-1/2 lg:ml-14'>
								<picture>
									<Image
										src={TabletMockupThullo}
										alt='Tablet Image Project'
										height={600}
									/>
								</picture>

								<picture className='grid place-items-end md:place-items-center'>
									<Image
										src={PhoneMockupThullo}
										alt='Phone Image Project'
									/>
								</picture>
							</div>
						</Reveal>

						<picture className='hidden lg:block md:basis-1/2'>
							<Reveal>
								<Image
									src='/characters/character-3d-left.png'
									alt='Personaje 3d'
									width={500}
									height={500}
								/>
							</Reveal>
						</picture>
					</div>
				</div>

				{isActive ? (
					<Reveal>
						<div className='grid grid-cols-2 gap-5 my-10'>
							<Image
								src={TrelloMockup1}
								alt='Mockup Trello'
								placeholder='blur'
								className='object-cover rounded-xl'
								quality={100}
							/>
							<Image
								src={TrelloMockup2}
								alt='Mockup Trello'
								placeholder='blur'
								className='object-cover rounded-xl'
								quality={100}
							/>
							<Image
								src={TrelloMockup3}
								alt='Mockup Trello'
								placeholder='blur'
								className='object-cover rounded-xl'
								quality={100}
							/>
							<Image
								src={TrelloMockup4}
								alt='Mockup Trello'
								placeholder='blur'
								className='col-start-2 col-end-3 row-start-1 row-end-3  h-full object-cover rounded-xl'
								quality={100}
							/>
							<Image
								src={TrelloMockup5}
								alt='Mockup Trello'
								placeholder='blur'
								className='object-cover rounded-xl'
								quality={100}
							/>
						</div>
					</Reveal>
				) : (
					<div className='flex justify-center mt-5'>
						<button
							className='text-neutral-300 p-3 bg-[#6F2A71] rounded-full'
							onClick={() => setIsActive(true)}>
							{' '}
							Ver mas imagenes{' '}
						</button>
					</div>
				)}
			</div>
		</>
	);
}
