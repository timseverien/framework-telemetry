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
	const [t] = useTime();
	const [width, height] = useViewportSize();
	const vmin = Math.min(width, height) / 100;

	const lineCount = 16;
	const lines = Array.from({ length: lineCount }, (_, index) => ({
		xOffset: index * 5 * vmin,
		length: vmin * 5 + vmin * 2 * Math.sin(t / 2 + (index / lineCount) * 2 * Math.PI),
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

			{lines.map(({ xOffset, length }) => {
				const x1 = xOffset;
				const y1 = 0;
				const x2 = x1 + length * Math.cos(lineAngle);
				const y2 = y1 + length * Math.sin(lineAngle);

				return (
					<line
						x1={x1}
						x2={x2}
						y1={y1}
						y2={y2}
						stroke="url(#background-line-gradient)"
						stroke-linecap="round"
						stroke-width={vmin}
					/>
				);
			})}
		</svg>
	);
};
