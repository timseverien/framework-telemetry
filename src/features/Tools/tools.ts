import type { TelemetryResource } from '@domain/telemetry';
import type { Tool } from '@domain/tool';

const resourceOrder: TelemetryResource['type'][] = ['DOCUMENTATION', 'DECISION'];

export const getResourcesSorted = (resources: TelemetryResource[]) =>
	[...resources].sort((a, b) => resourceOrder.indexOf(a.type) - resourceOrder.indexOf(b.type));

export const TOOLS: Tool[] = [
	{
		name: 'Astro',
		website: 'https://astro.build',
		npm: { name: 'astro' },
		telemetry: {
			type: 'OPT_OUT',
			disclosure: 'DOCS',
			scopes: ['CLI'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'USAGE'],
			resources: [
				{
					type: 'DECISION',
					url: 'https://gist.github.com/natemoo-re/c9966bad8029e4fe3cd5c0ef6e7db4d1?permalink_comment_id=4058197#gistcomment-4058197',
				},
				{
					type: 'DOCUMENTATION',
					url: 'https://docs.astro.build/en/reference/cli-reference/#astro-telemetry',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'astro telemetry disable',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					value: 'ASTRO_TELEMETRY_DISABLED=1',
				},
			],
		},
	},
	{
		name: 'Create React App',
		website: 'https://create-react-app.dev',
		npm: { name: 'react-scripts' },
		telemetry: { type: 'NONE' },
	},
	{
		name: 'Eleventy',
		website: 'https://www.11ty.dev',
		npm: { name: '@11ty/eleventy' },
		telemetry: { type: 'NONE' },
	},
	{
		name: 'Gatsby',
		website: 'https://wwww.gatsbyjs.com',
		npm: { name: 'gatsby' },
		telemetry: {
			type: 'OPT_OUT',
			disclosure: 'DOCS',
			scopes: ['CLI'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'PROJECT', 'USAGE'],
			resources: [
				{
					type: 'DECISION',
					url: 'https://github.com/gatsbyjs/rfcs/pull/33',
				},
				{
					type: 'DOCUMENTATION',
					url: 'https://www.gatsbyjs.com/docs/telemetry/',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'gatsby telemetry --disable',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					value: 'GATSBY_TELEMETRY_DISABLED=1',
				},
			],
		},
	},
	{
		name: 'Hexo',
		website: 'https://hexo.io',
		npm: { name: 'hexo' },
		telemetry: { type: 'NONE' },
	},
	{
		name: 'Hugo',
		website: 'https://gohugo.io',
		telemetry: { type: 'NONE' },
	},
	{
		name: 'Jekyll',
		website: 'https://jekyllrb.com',
		telemetry: { type: 'NONE' },
	},
	{
		name: 'Next.js',
		website: 'https://nextjs.org',
		npm: { name: 'next' },
		telemetry: {
			type: 'OPT_OUT',
			disclosure: 'DOCS',
			scopes: ['CLI'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'PROJECT', 'USAGE'],
			resources: [
				{
					type: 'DECISION',
					url: 'https://github.com/vercel/next.js/issues/8442',
				},
				{
					type: 'DOCUMENTATION',
					url: 'https://nextjs.org/telemetry',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'next telemetry disable',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					value: 'NEXT_TELEMETRY_DISABLED=1',
				},
			],
		},
	},
	{
		name: 'Nuxt.js',
		website: 'https://nuxtjs.org',
		npm: { name: 'nuxt' },
		telemetry: {
			type: 'OPT_IN',
			disclosure: 'USAGE',
			scopes: ['CLI'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'USAGE'],
			resources: [
				{
					type: 'DOCUMENTATION',
					url: 'https://nuxtjs.org/docs/configuration-glossary/configuration-telemetry',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'nuxt telemetry disable',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					value: 'NUXT_TELEMETRY_DISABLED=1',
				},
			],
		},
	},
	{
		name: 'Remix',
		website: 'https://remix.run',
		npm: { name: 'remix' },
		telemetry: { type: 'NONE' },
	},
	{
		name: 'Solid',
		website: 'https://www.solidjs.com',
		npm: { name: 'solid-js' },
		telemetry: { type: 'NONE' },
	},
	{
		name: 'Storybook',
		website: 'https://storybook.js.org',
		npm: { name: 'storybook' },
		telemetry: {
			type: 'OPT_OUT',
			disclosure: 'INITIALIZATION',
			scopes: ['CLI'],
			informationType: ['ENVIRONMENT', 'PROJECT', 'USAGE'],
			resources: [
				{
					type: 'DECISION',
					url: 'https://github.com/storybookjs/storybook/pull/18046',
				},
				{
					type: 'DOCUMENTATION',
					url: 'https://storybook.js.org/docs/react/configure/telemetry',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'storybook --disable-telemetry',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					value: 'STORYBOOK_DISABLE_TELEMETRY=1',
				},
			],
		},
	},
	{
		name: 'SvelteKit',
		website: 'https://kit.svelte.dev',
		npm: { name: 'svelte' },
		telemetry: { type: 'NONE' },
	},
];
