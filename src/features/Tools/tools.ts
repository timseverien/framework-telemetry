import type { TelemetryResource } from '@domain/telemetry';
import type { Tool } from '@domain/tool';

const resourceOrder: TelemetryResource['type'][] = ['DOCUMENTATION', 'DECISION'];

export const getResourcesSorted = (resources: TelemetryResource[]) =>
	[...resources].sort((a, b) => resourceOrder.indexOf(a.type) - resourceOrder.indexOf(b.type));

export const TOOLS: Tool[] = [
	{
		name: 'Astro',
		website: 'https://astro.build',
		alternatives: [],
		npm: { name: 'astro' },
		telemetry: {
			type: 'OPT_OUT',
			lastTestedVersion: '1.7.2',
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
				{
					type: 'SOURCE_CODE',
					url: 'https://github.com/withastro/astro/tree/main/packages/telemetry',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'astro telemetry disable',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					key: 'ASTRO_TELEMETRY_DISABLED',
					value: '1',
				},
			],
		},
	},
	{
		name: 'Create React App',
		website: 'https://create-react-app.dev',
		alternatives: [],
		npm: { name: 'react-scripts' },
		telemetry: {
			type: 'NONE',
			lastTestedVersion: '5.0.1',
		},
	},
	{
		name: 'Eleventy',
		website: 'https://www.11ty.dev',
		alternatives: [],
		npm: { name: '@11ty/eleventy' },
		telemetry: {
			type: 'NONE',
			lastTestedVersion: '1.0.2',
		},
	},
	{
		name: 'Gatsby',
		website: 'https://www.gatsbyjs.com',
		alternatives: [],
		npm: { name: 'gatsby' },
		telemetry: {
			type: 'OPT_OUT',
			lastTestedVersion: '5.3.0',
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
				{
					type: 'SOURCE_CODE',
					url: 'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-telemetry',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'gatsby telemetry --disable',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					key: 'GATSBY_TELEMETRY_DISABLED',
					value: '1',
				},
			],
		},
	},
	{
		name: 'Hexo',
		website: 'https://hexo.io',
		alternatives: [],
		npm: { name: 'hexo' },
		telemetry: {
			type: 'NONE',
			lastTestedVersion: '6.3.0',
		},
	},
	{
		name: 'Homebrew',
		website: 'https://docs.brew.sh',
		alternatives: [],
		telemetry: {
			type: 'OPT_OUT',
			lastTestedVersion: '4.0.15',
			disclosure: 'DOCS',
			scopes: ['CLI'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'PROJECT', 'USAGE'],
			resources: [
				{ type: 'DOCUMENTATION', url: 'https://docs.brew.sh/Analytics' },
				{
					type: 'SOURCE_CODE',
					url: 'https://github.com/Homebrew/brew/blob/master/Library/Homebrew/utils/analytics.rb',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'brew analytics off',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					key: 'HOMEBREW_NO_ANALYTICS',
					value: '1',
				},
			],
		},
	},
	{
		name: 'Hugo',
		website: 'https://gohugo.io',
		alternatives: [],
		telemetry: {
			type: 'NONE',
			lastTestedVersion: '0.109.0',
		},
	},
	{
		name: 'Jekyll',
		website: 'https://jekyllrb.com',
		alternatives: [],
		telemetry: {
			type: 'NONE',
			lastTestedVersion: '4.3.1',
		},
	},
	{
		name: 'Next.js',
		website: 'https://nextjs.org',
		alternatives: [],
		npm: { name: 'next' },
		telemetry: {
			type: 'OPT_OUT',
			lastTestedVersion: '13.1.0',
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
				{
					type: 'SOURCE_CODE',
					url: 'https://github.com/vercel/next.js/tree/canary/packages/next/src/telemetry',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'next telemetry disable',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					key: 'NEXT_TELEMETRY_DISABLED',
					value: '1',
				},
			],
		},
	},
	{
		name: 'Nuxt.js',
		website: 'https://nuxtjs.org',
		alternatives: [],
		npm: { name: 'nuxt' },
		telemetry: {
			type: 'OPT_IN',
			lastTestedVersion: '3.0.0',
			disclosure: 'USAGE',
			scopes: ['CLI'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'USAGE'],
			resources: [
				{
					type: 'DOCUMENTATION',
					url: 'https://nuxtjs.org/docs/configuration-glossary/configuration-telemetry',
				},
				{
					type: 'SOURCE_CODE',
					url: 'https://github.com/nuxt/telemetry',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'nuxt telemetry disable',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					key: 'NUXT_TELEMETRY_DISABLED',
					value: '1',
				},
				{
					type: 'SETTING',
					value: 'telemetry: false',
				},
			],
		},
	},
	{
		name: 'Remix',
		website: 'https://remix.run',
		alternatives: [],
		npm: { name: 'remix' },
		telemetry: {
			type: 'NONE',
			lastTestedVersion: '1.9.0',
		},
	},
	{
		name: 'Solid',
		website: 'https://www.solidjs.com',
		alternatives: [],
		npm: { name: 'solid-js' },
		telemetry: {
			type: 'NONE',
			lastTestedVersion: '1.6.0',
		},
	},
	{
		name: 'Storybook',
		website: 'https://storybook.js.org',
		alternatives: [],
		npm: { name: 'storybook' },
		telemetry: {
			type: 'OPT_IN',
			lastTestedVersion: '6.5.15',
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
				{
					type: 'SOURCE_CODE',
					url: 'https://github.com/storybookjs/storybook/tree/next/code/lib/telemetry',
				},
			],
			optOutOptions: [
				{
					type: 'COMMAND',
					value: 'storybook --disable-telemetry',
				},
				{
					type: 'ENVIRONMENT_VARIABLE',
					key: 'STORYBOOK_DISABLE_TELEMETRY',
					value: '1',
				},
				{
					type: 'SETTING',
					value: 'core: disableTelemetry: true }',
				},
			],
		},
	},
	{
		name: 'SvelteKit',
		website: 'https://kit.svelte.dev',
		alternatives: [],
		npm: { name: 'svelte' },
		telemetry: {
			type: 'NONE',
			lastTestedVersion: '1.0.1',
		},
	},
	{
		name: 'Visual Studio Code',
		website: 'https://code.visualstudio.com',
		alternatives: [
			{
				name: 'VSCodium',
				website: 'https://vscodium.com',
			},
		],
		telemetry: {
			type: 'OPT_OUT',
			lastTestedVersion: '1.74.2',
			disclosure: 'USAGE',
			scopes: ['APP'],
			informationType: ['DEVICE', 'ENVIRONMENT', 'PROJECT', 'USAGE'],
			resources: [
				{
					type: 'DOCUMENTATION',
					url: 'https://code.visualstudio.com/docs/getstarted/telemetry',
				},
				{
					type: 'SOURCE_CODE',
					url: 'https://github.com/microsoft/vscode/tree/main/src/vs/platform/telemetry',
				},
			],
			optOutOptions: [{ type: 'SETTING', value: '"telemetry.telemetryLevel": "off"' }],
		},
	},
];
