import { mix } from '@functions/math';
import { formatScore } from '@functions/telemetry';
import styles from './styles.module.css';

type ColorHsl = [number, number, number];
type ColorHsla = [number, number, number, number];

const getHslColorString = ([h, s, l]: ColorHsl) =>
	`hsl(${Math.round(360 * h)}, ${100 * s}%, ${100 * l}%)`;

const getHslaColorString = ([h, s, l, a]: ColorHsla) =>
	`hsl(${Math.round(360 * h)}, ${100 * s}%, ${100 * l}%, ${a})`;

const mixHslColor = ([h1, s1, l1]: ColorHsl, [h2, s2, l2]: ColorHsl, t: number): ColorHsl => [
	mix(h1, h2, t),
	mix(s1, s2, t),
	mix(l1, l2, t),
];

const getScoreColor = (score: number) => {
	const colorStart: ColorHsl = [0, 1, 0.5];
	const colorEnd: ColorHsl = [0.25, 1, 0.5];
	return mixHslColor(colorStart, colorEnd, score);
};

export const Score = ({ value }: { value: number }) => (
	<div class={styles.score} style={{ color: getHslColorString(getScoreColor(value)) }}>
		{formatScore(value)}
	</div>
);

export const ScoreDonut = ({ value }: { value: number }) => {
	const CANVAS_PADDING = 3;
	const CANVAS_SIZE = 128;
	const CANVAS_SIZE_HALF = CANVAS_SIZE / 2;

	const DONUT_RADIUS = 0.5 * CANVAS_SIZE - 2 * CANVAS_PADDING;

	const color = getScoreColor(value);
	const colorBackground: ColorHsla = [...color, 0.1];

	const endAngle = 2 * Math.PI * value;
	const endX = DONUT_RADIUS * Math.cos(endAngle);
	const endY = DONUT_RADIUS * Math.sin(endAngle);
	const largeArcFlag = value >= 0.5 ? 1 : 0;

	return (
		<svg
			class={styles.scoreDonut}
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`${-CANVAS_SIZE_HALF} ${-CANVAS_SIZE_HALF} ${CANVAS_SIZE} ${CANVAS_SIZE}`}
			height={CANVAS_SIZE}
			width={CANVAS_SIZE}
		>
			<path
				class={styles.illustrationLine}
				d={`M ${DONUT_RADIUS} 0 A ${DONUT_RADIUS} ${DONUT_RADIUS} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
				stroke={getHslColorString(color)}
				stroke-linecap="round"
				fill="none"
				transform="rotate(-90)"
			/>
			<circle
				class={styles.illustrationLine}
				r={CANVAS_SIZE_HALF}
				fill={getHslaColorString(colorBackground)}
				stroke-linecap="round"
			/>
			<text y="10" fill={getHslColorString(color)} text-anchor="middle">
				{formatScore(value)}
			</text>
		</svg>
	);
};
