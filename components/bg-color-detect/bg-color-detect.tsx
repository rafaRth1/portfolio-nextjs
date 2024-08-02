import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

interface Props extends React.HTMLAttributes<Element> {
	src: StaticImageData;
}

export default function BgColorDetect(props: Props) {
	const { src, className } = props;
	const image = useRef<HTMLImageElement>(null);

	return (
		<div className={`relative rounded-xl h-auto ${className}`}>
			<Image
				src={src}
				alt='Mockup Trello'
				ref={image}
				width={500}
				height={500}
				loading='lazy'
				className='relative object-cover rounded-xl w-full z-20'
				quality={100}
			/>
		</div>
	);
}
