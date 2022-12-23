import type { TelemetryInformation } from './telemetry';
import slugify from 'slugify';

export type Tool = {
	name: string;
	website: string;
	npm?: {
		name: string;
	};
	telemetry: TelemetryInformation;
};

export const getToolSlug = (tool: Tool) => slugify(tool.name.toLowerCase());

export const getToolNpmDownloadCount = async (tool: Tool) => {
	const url = `https://api.npmjs.org/downloads/point/last-week/${tool.npm?.name}`;
	const response = await fetch(url);
	const { downloads } = await response.json();

	return downloads;
};
