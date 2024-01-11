import Projects from '@components/SectionProjects/Projects';
import Skills from '@components/SectionSkills/Skills';
import Home from '@components/SectionHome/SectionHome';

export default function SectionHome() {
	return (
		<main>
			<Home />
			
			<div className='line-one w-full h-10'></div>

			<Projects />

			<Skills />
		</main>
	);
}
