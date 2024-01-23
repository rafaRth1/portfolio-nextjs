import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../Reveal/Reveal';
import Tablet_Mockup_Link from '../../public/mockups/laptop-mockup-link.png';
import { BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { IoLogoReact } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';

export default function SharedLinkCustom() {
	return (
		<div className='relative mb-10'>
			<div className='absolute w-full h-full  gradients-one flex justify-evenly items-center z-10'>
				<div className='w-[250px] h-[250px] rounded-full bg-[#FF0000] blur-[150px]'></div>
				<div className='w-[250px] h-[250px] rounded-full bg-[#0E9FF8] blur-[150px]'></div>
				<div className='w-[250px] h-[250px] rounded-full bg-[#3B82F6] blur-[150px]'></div>
			</div>

			<div className='flex flex-col-reverse xl:flex-row items-center mb-10 z-30 relative'>
				<picture className='basis-1/2 mt-10 xl:mt-0'>
					<Reveal>
						<Image
							src={Tablet_Mockup_Link}
							alt='Laptop Image Project'
							loading='lazy'
							placeholder='empty'
						/>
					</Reveal>
				</picture>

				<div className='flex flex-col basis-1/2 md:ml-4'>
					<h3 className='text-2xl text-neutral-300 font-bold text-center md:text-left'>Shared Link Custom</h3>

					<p className='text-lg text-neutral-300 mt-5'>
						Esta aplicación lo he realizado para compartir las redes sociales personalizando en la manera que
						desees mostrar; incluye un dashboard para mirar tus estadísticas.
					</p>

					<p className='text-lg text-neutral-300 mt-5'>¿Cuál fue mi dificultad en este proyecto?</p>

					<ul className='list-disc text-lg text-neutral-300 ml-5'>
						<li>Integrar las diferentes redes sociales. </li>
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

						<TbBrandNextjs
							className='text-[#ffffff]'
							size={40}
						/>
					</div>

					<div className='flex items-center justify-center md:justify-start gap-4 mt-6'>
						<Link
							href='https://trullo-thello-clone-rafarth1.netlify.app'
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

			<div className='flex justify-center items-center relative z-30'>
				<Reveal>
					<div className='flex md:basis-1/2 lg:ml-14'>
						<picture>
							<Image
								src='/mockups/tablet-mockup-link.png'
								alt='Tablet Image Project'
								width={380}
								height={520}
							/>
						</picture>

						<picture className='grid place-items-end md:place-items-center'>
							<Image
								src='/mockups/phone-mockup-link.png'
								alt='Phone Image Project'
								width={212}
								height={399}
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
	);
}
