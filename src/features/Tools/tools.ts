import type { Tool } from '@domain/tool';

export const TOOLS: Tool[] = [
	{
		name: 'Astro',
		website: 'https://astro.build',
		npm: { name: 'astro' },
		telemetry: {
			type: 'OPT_OUT',
			scopes: ['CLI'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'USAGE'],
			resource: 'https://docs.astro.build/en/reference/cli-reference/#astro-telemetry',
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
			scopes: ['CLI'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'PROJECT', 'USAGE'],
			resource: 'https://www.gatsbyjs.com/docs/telemetry/',
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
			scopes: ['CLI'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'PROJECT', 'USAGE'],
			resource: 'https://nextjs.org/telemetry',
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
			type: 'OPT_OUT',
			scopes: ['CLI'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'USAGE'],
			resource: 'https://nuxtjs.org/docs/configuration-glossary/configuration-telemetry',
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
		name: 'SvelteKit',
		website: 'https://kit.svelte.dev',
		npm: { name: 'svelte' },
		telemetry: { type: 'NONE' },
	},
];
