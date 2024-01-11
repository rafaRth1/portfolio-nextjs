import React from 'react';
import './Skills.css';

export default function Skills() {
	return (
		<section
			className='section-skills relative container-custom p-5'
			id='tecnologias'>
			<h2 className='text-3xl font-bold text-center text-neutral-300 my-10'>Tecnologías que uso</h2>

			<div className='grid-skills '>
				<div className='absolute inset-0  gradients-one flex justify-evenly items-center'>
					<div className='w-[250px] h-[250px] rounded-full bg-[#202635] blur-[150px]'></div>
					<div className='w-[250px] h-[250px] rounded-full bg-[#202635] blur-[150px]'></div>
					<div className='w-[250px] h-[250px] rounded-full bg-[#202635] blur-[150px]'></div>
				</div>

				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-[#FF4B00] transition-all'>
					<span>HTML5</span>
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer text-neutral-100 transition-all'>
					<div className='w-full h-full bg-neutral-950'></div>
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-[#006db4] transition-all'>
					CSS3
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-neutral-100 transition-all'>
					<img
						src='./abstract-item-2.png'
						alt='Espiral Image'
						className='object-cover'
					/>
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-[#FFDF00] transition-all'>
					Javascript
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-neutral-100 transition-all'></div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-[#07b6d5] transition-all'>
					TailwindCSS
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-neutral-100 transition-all'>
					<img
						src='./abstract-item-1.png'
						alt='Espiral Image'
					/>
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-[#DE2A75] transition-all'>
					Sass
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-neutral-100 transition-all'></div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-[#01ccfe] transition-all'>
					ReactJS
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer text-neutral-100'>
					<div className='w-full h-full bg-neutral-950'></div>
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-neutral-100 transition-all'>
					ExpressJS
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-neutral-100 transition-all'>
					NextJS
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-[#00FF7B] transition-all'>
					Skills
				</div>
				<div className='grid__item text-3xl font-medium cursor-pointer hover:bg-neutral-900 text-neutral-100 transition-all'></div>
			</div>
		</section>
	);
}
