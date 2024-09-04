import React from 'react';
import TrelloClone from './TrelloClone';
import Ingmar from './Ingmar';
import SharedLinkCustom from './SharedLinkCustom';
import { RecepcionApp } from './RecepcionApp';

export default function Projects() {
	return (
		<section
			className='section-projects relative container-custom p-5'
			id='projects'>
			{/* <h2 className='text-3xl font-bold text-center text-neutral-300 my-10'>Proyectos</h2> */}

			<RecepcionApp />
			<TrelloClone />
			<Ingmar />
			<SharedLinkCustom />
		</section>
	);
}
