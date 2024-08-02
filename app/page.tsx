import Projects from '@/app/_components/SectionProjects/Projects';
import Skills from '@/app/_components/SectionSkills/Skills';
import Home from './_components/SectionHome/SectionHome';

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
