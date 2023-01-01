import fs from 'fs';

const [ANIMATION_NAME, CSS_SELECTOR] = process.argv.splice(2);
const settings = JSON.parse(fs.readFileSync('src/components/Background/settings.json').toString());

const lines = Array.from({ length: settings.lineCount }, (_, i) => ({
	animationDelay:
		-1 *
		Math.floor(
			settings.waveFrequency *
				((settings.lineCount - i - 1) / settings.lineCount) *
				settings.animationDuration
		),
}));

const css = `@keyframes ${ANIMATION_NAME} {
  from { translate: 0 0; }
  to { translate: var(--${ANIMATION_NAME}-offset) var(--${ANIMATION_NAME}-offset); }
}

${CSS_SELECTOR} {
	animation-duration: ${settings.animationDuration}ms;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-name: ${ANIMATION_NAME};
	stroke-width: var(--illustration-line-width);
}

${lines
	.map(
		(line, index) =>
			`${CSS_SELECTOR}:nth-child(${1 + index}) { animation-delay: ${line.animationDelay}ms; }`
	)
	.join('\n')}`;

console.log(css);
