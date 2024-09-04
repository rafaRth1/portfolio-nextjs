'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { BgColorDetect, Reveal } from '@/components/';
import LaptopMockupRecepcion from '@/public/mockups/recepcion-app/devices/recepcion-mockup-desktop.png';
import PhoneMockupRecepcion from '@/public/mockups/recepcion-app/devices/recepcion-mockup-phone.png';
import TabletMockupRecepcion from '@/public/mockups/recepcion-app/devices/recepcion-mockup-tablet.png';
import { imagesRecepcion } from '@/public/mockups/recepcion-app';
import { IoLogoReact } from 'react-icons/io5';
import { SiExpress } from 'react-icons/si';
import { BiLogoMongodb, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { TbBrandSocketIo } from 'react-icons/tb';

export const RecepcionApp = () => {
	return (
		<div className='mb-10'>
			<div className='relative'>
				<div className='absolute w-full h-full gradients-one flex justify-evenly items-center'>
					<div className='w-[250px] h-[250px] rounded-full bg-[#852749] blur-[150px]'></div>
					<div className='w-[250px] h-[250px] rounded-full bg-[#221c67] blur-[150px]'></div>
					<div className='w-[250px] h-[250px] rounded-full bg-[#c1801e] blur-[150px]'></div>
				</div>

				<h1 className='text-7xl text-neutral-100 text-center font-semibold'>Proyecto Recepcion App</h1>

				<div className='flex items-center flex-col-reverse md:flex-row relative z-30 my-10'>
					<picture className='md:mr-10'>
						<Reveal>
							<Image
								src={LaptopMockupRecepcion}
								alt='Laptop Image Project'
								loading='lazy'
								placeholder='empty'
							/>
						</Reveal>
					</picture>

					<div>
						<h2 className='text-3xl font-medium'>Descripción</h2>
						<p className='text-xl text-neutral-300 mt-5'>
							Esta aplicación lo realize con fines de optimizarme en el trabajo que estuve como recepcionista de pedidos
							Fast Food creando especies de comandas para tomar un pedido de manera ordenada.
						</p>
					</div>
				</div>

				<div className='relative flex items-center flex-col-reverse md:flex-row z-20 mb-10'>
					<div className='basis-1/2 mr-10'>
						<h2 className='text-3xl font-medium mb-3'>¿Cual fue mi dificultad en este proyecto?</h2>

						<ul className='list-disc text-xl text-neutral-300 ml-5'>
							<li>Integrar SocketIO</li>
							<li>Crear una interfaz de comanda extensa y distribuir los datos a cada pagina que se comunican</li>
							<li>Hacer bien las actualizaciones de los componentes para que no surga "re-renders".</li>
						</ul>
					</div>

					<picture className='basis-1/2 mb-10 md:mb-0'>
						<Reveal>
							<Image
								src={TabletMockupRecepcion}
								alt='Tablet Thullo'
								loading='lazy'
								placeholder='empty'
							/>
						</Reveal>
					</picture>
				</div>

				<div className='flex items-center flex-col md:flex-row relative z-20'>
					<picture className='basis-1/2 mb-10 md:mb-0 md:mr-10'>
						<Image
							src={PhoneMockupRecepcion}
							alt='Phone Image Project'
							className='mx-auto'
							width={300}
							height={586}
						/>
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
							<div className='flex flex-col items-center'>
								<TbBrandSocketIo
									className='text-neutral-400'
									size={40}
								/>
								<span>SokectIO</span>
							</div>
						</div>

						<p className='text-red-600 mb-5'>
							Esperar 50s a 1 minuto ya que es la respuesta de un servidor gratuito que acepta SocketIO
						</p>

						<div className='flex '>
							<Button
								size='lg'
								color='secondary'
								className='mr-10'>
								<Link
									href={'https://recepcion-app.netlify.app/'}
									target='_blank'>
									Vista Previa
								</Link>
							</Button>
							<Button size='lg'>
								<Link
									href='https://github.com/rafaRth1/recepcions-app'
									target='_blank'>
									Repositorio
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<Reveal>
				<div className='grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-2 sm:gap-5 mb-60 mt-32'>
					{imagesRecepcion.map((image) => (
						<BgColorDetect
							key={image.id}
							src={image.src}
							className='sm:even:translate-y-24'
						/>
					))}
				</div>
			</Reveal>
		</div>
	);
};
