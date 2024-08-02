'use client';

import React from 'react';
import Link from 'next/link';
import './navigation.css';

const links = [
	{
		label: 'Inicio',
		route: '/',
	},

	{
		label: 'Proyectos',
		route: '#projects',
	},

	{
		label: 'Tecnologías',
		route: '#tecnologias',
	},
];

const Navigation = () => {
	const handleClick = (route: string) => {
		const id = route.slice(1);
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<header className='flex w-full p-5 relative z-30'>
			<nav className='container-navigation container-custom flex flex-col sm:flex-row justify-between items-center'>
				<Link
					href={`/`}
					className='text-3xl font-bold text-[#E4DCD9]'>
					Rafael Alvarez
				</Link>

				<ul className='flex gap-5 mt-5 sm:mt-0'>
					{links.map((link) => (
						<li key={link.route}>
							<Link
								scroll={false}
								href='/#projects'
								className='text-[#E4DCD9] text-lg'
								onClick={() => handleClick(link.route)}>
								{link.label}
							</Link>
							{/* <button
								className='text-[#E4DCD9] text-lg'
								onClick={() => handleClick(link.route)}>
								{link.label}
							</button> */}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
