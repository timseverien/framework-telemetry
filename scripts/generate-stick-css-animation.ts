const [ANIMATION_NAME, LINE_COUNT_STR] = process.argv.splice(2);
const LINE_COUNT = Number.parseInt(LINE_COUNT_STR, 10);

const ANIMATION_DURATION = 2000;

const lines = Array.from({ length: LINE_COUNT }, (_, i) => ({
	animationDelay: Math.floor(((LINE_COUNT - i - 1) / LINE_COUNT) * ANIMATION_DURATION),
}));

export const f = '1';

const foo = `@keyframes ${ANIMATION_NAME} {
  from { transform: translate(0, 0); }
  to { transform: translate(var(--line-animation-offset), var(--line-animation-offset)); }
}

----

.selector {
	animation-duration: ${ANIMATION_DURATION}ms;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-name: ${ANIMATION_NAME};
}

${lines
	.map(
		(line, index) =>
			`.selector:nth-child(${1 + index}) { animation-delay: ${line.animationDelay}ms; }`
	)
	.join('\n')}`;

console.log(foo);
