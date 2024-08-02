'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { BgColorDetect, Reveal } from '@/components/';
import LaptopMockupLink from '@/public/mockups/shared-link-custom/devices/shared-mockup-deskptop.png';
import Tablet_MockupLink from '@/public/mockups/shared-link-custom/devices/shared-mockup-tablet.png';
import PhoneMockupLink from '@/public/mockups/shared-link-custom/devices/shared-mockup-phone.png';
import { imagesShared } from '@/public/mockups/shared-link-custom';
import { BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { IoLogoReact } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';

export default function SharedLinkCustom() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='relative'>
			<div className='relative'>
				<div className='absolute w-full h-full  gradients-one flex justify-evenly items-center'>
					<div className='w-[250px] h-[250px] rounded-full bg-[#FF0000] blur-[150px]'></div>
					<div className='w-[250px] h-[250px] rounded-full bg-[#0E9FF8] blur-[150px]'></div>
					<div className='w-[250px] h-[250px] rounded-full bg-[#3B82F6] blur-[150px]'></div>
				</div>

				<h1 className='text-7xl text-neutral-100 text-center font-semibold'>Proyecto Shared Link Custom</h1>

				<div className='flex items-center flex-col-reverse md:flex-row relative z-30 my-10'>
					<picture className='md:mr-10'>
						<Reveal>
							<Image
								src={LaptopMockupLink}
								alt='Laptop Image Project'
								loading='lazy'
								placeholder='empty'
							/>
						</Reveal>
					</picture>

					<div>
						<h2 className='text-3xl font-medium'>Descripción</h2>
						<p className='text-xl text-neutral-300 mt-5'>
							Esta aplicación lo he realizado para compartir las redes sociales personalizando en la manera que desees
							mostrar; incluye un dashboard para mirar tus estadísticas.
						</p>
					</div>
				</div>

				<div className='relative flex items-center flex-col-reverse md:flex-row z-20 mb-10'>
					<div className='basis-1/2 mr-10'>
						<h2 className='text-3xl font-medium mb-4'>¿Cual fue mi dificultad en este proyecto?</h2>

						<ul className='list-disc text-xl text-neutral-300 ml-5'>
							<li>Represtar los datos en componentes de estadísticas.</li>
							<li>Intentar estructurar bien las carpetas de NextJS.</li>
						</ul>
					</div>

					<picture className='basis-1/2 mb-10 md:mb-0'>
						<Reveal>
							<Image
								src={Tablet_MockupLink}
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
								src={PhoneMockupLink}
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
								<TbBrandNextjs
									className='text-[#ffffff]'
									size={40}
								/>
								<span>NextJS</span>
							</div>
						</div>

						<div className='flex'>
							<Button
								color='secondary'
								size='lg'
								className='mr-10'>
								<Link
									href='https://shared-links-custom.netlify.app/auth/login'
									target='_blank'>
									Vista Previa
								</Link>
							</Button>
							<Button size='lg'>
								<Link
									href='https://github.com/rafaRth1/shared-links-custom'
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
						{imagesShared.map((image) => (
							<BgColorDetect
								key={image.id}
								src={image.src}
								className='sm:even:translate-y-24'
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
