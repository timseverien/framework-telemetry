import slugify from 'slugify';
import type { TelemetryInformation } from './telemetry';

export type Tool = {
	name: string;
	website: string;
	alternatives: Pick<Tool, 'name' | 'website'>[];
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

	return downloads as number;
};
