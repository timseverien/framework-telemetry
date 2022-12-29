export const createClassName = (classNames: (string | null | undefined)[]) =>
	classNames.filter((c) => typeof c === 'string').join(' ');
