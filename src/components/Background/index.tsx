import { useEffect, useState } from 'preact/hooks';

import styles from './styles.module.css';

const useTime = () => {
	const getNow = () => Date.now();
	const [time, setTime] = useState(getNow());

	useEffect(() => {
		const update = () => {
			const now = getNow();
			const delta = now - time;

			setTime(time + delta);
			requestAnimationFrame(update);
		};

		requestAnimationFrame(update);
	}, []);

	return [time / 1000];
};

const useViewportSize = () => {
	const [height, setHeight] = useState(1);
	const [width, setWidth] = useState(1);

	useEffect(() => {
		if (import.meta.env.SSR) return;

		setHeight(window.innerHeight);
		setWidth(window.innerWidth);

		window.addEventListener('resize', () => {
			setHeight(window.innerHeight);
			setWidth(window.innerWidth);
		});
	}, []);

	return [width, height];
};

export const Background = () => {
	// const [t] = useTime();
	// const [width, height] = useViewportSize();
	const width = 1024;
	const height = 768;

	const vmin = Math.min(width, height) / 100;
	const length = height;

	const lineCount = 16;
	const lines = Array.from({ length: lineCount }, (_, index) => ({
		// xOffset: index * 5 * vmin,
		// length: vmin * 5 + vmin * 2,

		x: index * 5,
	}));

	const lineAngle = Math.PI / 4;

	return (
		<svg class={styles.background} width={width} height={height}>
			<defs>
				<linearGradient id="background-line-gradient" x1="0" x2="1" y1="0" y2="1">
					<stop offset="0%" stop-color="var(--color-primary)" />
					<stop offset="100%" stop-color="var(--color-primary-fade)" />
				</linearGradient>
			</defs>

			<g>
				{lines.map(({ x }) => {
					// const x1 = xOffset + length * Math.cos(-lineAngle);
					// const y1 = length * Math.sin(-lineAngle);
					// const x2 = x1 + 2 * length * Math.cos(lineAngle);
					// const y2 = y1 + 2 * length * Math.sin(lineAngle);

					const y1 = -length;
					const y2 = length;

					return (
						<line
							class={styles.line}
							x1={x}
							x2={x}
							y1={y1}
							y2={y2}
							stroke="url(#background-line-gradient)"
							stroke-linecap="round"
							stroke-width={vmin}
						/>
					);
				})}
			</g>
		</svg>
	);
};
