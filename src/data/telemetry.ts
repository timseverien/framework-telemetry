import type {
	TelemetryInformation,
	TelemetryInformationType,
	TelemetryScope,
	TelemetryType,
} from '../domain/telemetry';

export const TELEMETRY_TOOL_LIST: TelemetryInformation[] = [
	{
		name: 'Astro',
		type: 'OPT_OUT',
		scopes: ['CLI'],
		informationType: ['DEVICE', 'ENVIRONMENT', 'USAGE'],
		resource: 'https://docs.astro.build/en/reference/cli-reference/#astro-telemetry',
		website: 'https://astro.build',
	},
	{
		name: 'Create React App',
		type: 'NONE',
		scopes: [],
		informationType: [],
		resource: null,
		website: 'https://create-react-app.dev',
	},
	{
		name: 'Eleventy',
		type: 'NONE',
		scopes: [],
		informationType: [],
		resource: null,
		website: 'https://www.11ty.dev',
	},
	{
		name: 'Fresh',
		type: 'NONE',
		scopes: [],
		informationType: [],
		resource: null,
		website: 'https://usefresh.org',
	},
	{
		name: 'Gatsby',
		type: 'OPT_OUT',
		scopes: ['CLI'],
		informationType: ['DEVICE', 'ENVIRONMENT', 'PROJECT', 'USAGE'],
		resource: 'https://www.gatsbyjs.com/docs/telemetry/',
		website: 'https://www.gatsbyjs.com',
	},
	{
		name: 'Hexo',
		type: 'NONE',
		scopes: [],
		informationType: [],
		resource: null,
		website: 'https://hexo.io',
	},
	{
		name: 'Hugo',
		type: 'NONE',
		scopes: [],
		informationType: [],
		resource: null,
		website: 'https://gohugo.io',
	},
	{
		name: 'Jekyll',
		type: 'NONE',
		scopes: [],
		informationType: [],
		resource: null,
		website: 'https://jekyllrb.com',
	},
	{
		name: 'Next.js',
		type: 'OPT_OUT',
		scopes: ['CLI'],
		informationType: ['DEVICE', 'ENVIRONMENT', 'PROJECT', 'USAGE'],
		resource: 'https://nextjs.org/telemetry',
		website: 'https://nextjs.org',
	},
	{
		name: 'Nuxt.js',
		type: 'OPT_OUT',
		scopes: ['CLI'],
		informationType: ['DEVICE', 'ENVIRONMENT', 'USAGE'],
		resource: 'https://nuxtjs.org/docs/configuration-glossary/configuration-telemetry',
		website: 'https://nuxtjs.org',
	},
	{
		name: 'Remix',
		type: 'NONE',
		scopes: [],
		informationType: [],
		resource: null,
		website: 'https://remix.run',
	},
	{
		name: 'Solid',
		type: 'NONE',
		scopes: [],
		informationType: [],
		resource: null,
		website: 'https://www.solidjs.com',
	},
	{
		name: 'SvelteKit',
		type: 'NONE',
		scopes: [],
		informationType: [],
		resource: null,
		website: 'https://kit.svelte.dev',
	},
];

export const TELEMETRY_TYPE_LABELS: { [key in TelemetryType]: string } = {
	NONE: 'None',
	OPT_IN: 'Opt-in',
	OPT_OUT: 'Opt-out',
	UNKNOWN: 'Unknown',
};

export const TELEMETRY_INFORMATION_TYPE_LABELS: { [key in TelemetryInformationType]: string } = {
	DEVICE: 'Device',
	ENVIRONMENT: 'Environment',
	PERSONAL: 'Personal information',
	PROJECT: 'Project',
	USAGE: 'Usage',
};

export const TELEMETRY_SCOPE_LABELS: { [key in TelemetryScope]: string } = {
	CLI: 'CLI',
	CLIENT_SIDE: 'Client-side',
	INSTALLATION: 'Installation',
};
