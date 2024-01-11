'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
	children: JSX.Element[] | JSX.Element;
	width?: 'fit-content' | '100%';
	className?: string;
}

export default function Reveal({ children, width = 'fit-content', className }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		once: true,
		margin: '-50px 0px',
	});

	return (
		<div
			className={className}
			style={{ position: 'relative' }}
			ref={ref}>
			<motion.div
				initial='hidden'
				variants={{
					hidden: { opacity: 0, y: 20 },
				}}
				animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
				transition={{ duration: 0.5, delay: 0.1 }}>
				{children}
			</motion.div>
		</div>
	);
}
