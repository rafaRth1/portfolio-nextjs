import { randomUUID } from 'crypto';
import { BiLogoMongodb, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoReact, IoLogoSass } from 'react-icons/io5';
import { SiExpress } from 'react-icons/si';

export const technologies = [
	{
		id: randomUUID(),
		name: 'HTML5',
		Icon: IoLogoHtml5,
		color: '#f64b1c',
	},

	{
		id: randomUUID(),
		name: 'CSS3',
		Icon: IoLogoCss3,
		color: '#146eb0',
	},

	{
		id: randomUUID(),
		name: 'Javascript',
		Icon: IoLogoJavascript,
		color: '#eed81c',
	},

	{
		id: randomUUID(),
		name: 'React JS',
		Icon: IoLogoReact,
		color: '#00CCFF',
	},

	{
		id: randomUUID(),
		name: 'TailwindCSS',
		Icon: BiLogoTailwindCss,
		color: '#39bcf8',
	},

	{
		id: randomUUID(),
		name: 'Sass',
		Icon: IoLogoSass,
		color: '#cd6698',
	},

	{
		id: randomUUID(),
		name: 'Typescript',
		Icon: BiLogoTypescript,
		color: '#2f75c1',
	},

	{
		id: randomUUID(),
		name: 'ExpressJS',
		Icon: SiExpress,
		color: 'text-neutral-200',
	},

	{
		id: randomUUID(),
		name: 'MongoDB',
		Icon: BiLogoMongodb,
		color: '#00ff7b',
	},
];
