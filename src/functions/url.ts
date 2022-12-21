import { StateUpdater, useEffect, useState } from 'preact/hooks';

const PARAM_ARRAY_SEPARATOR = ',';

const getParams = () =>
	import.meta.env.SSR ? new URLSearchParams() : new URLSearchParams(window.location.search);

export const useQueryParam = (name: string): [string | null, StateUpdater<string | null>] => {
	const [param, setParam] = useState<string | null>(getParams().get(name));

	useEffect(() => {
		const params = getParams();

		if (import.meta.env.SSR || params.get(name) === param) return;

		const copy = new URLSearchParams(params);

		param ? copy.set(name, param) : copy.delete(name);
		window.history.pushState({}, '', `?${copy.toString()}`);
	}, [name, param]);

	return [param, setParam];
};

export const useArrayQueryParam = <T>(
	name: string,
	parseItem: (v: any) => T | null
): [T[], (vs: T[]) => void] => {
	const parseParam = (p: string) =>
		p
			.split(new RegExp(PARAM_ARRAY_SEPARATOR, 'g'))
			.map((v) => parseItem(v))
			.filter((v) => v !== null) as T[];

	const serializeParam = (values: T[]) =>
		setParam(values.length > 0 ? values.join(PARAM_ARRAY_SEPARATOR) : null);

	const [param, setParam] = useQueryParam(name);
	return [param ? parseParam(param) : [], serializeParam];
};
