import settings from './settings.json';
import styles from './styles.module.css';

export const Background = () => {
	const width = 768;
	const height = 48;
	const length = 0.5 * height;

	const lineCount = settings.lineCount;
	const lines = Array.from({ length: lineCount }, (_, index) => ({
		x: (index / lineCount) * (width - 0.5 * height),
	}));

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
					const y1 = -0.5 * length;
					const y2 = length;

					return (
						<line
							class={styles.line}
							x1={x + y1}
							x2={x + y2}
							y1={y1}
							y2={y2}
							stroke="url(#background-line-gradient)"
							stroke-linecap="round"
						/>
					);
				})}
			</g>
		</svg>
	);
};
