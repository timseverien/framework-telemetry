import type {
	TelemetryDisclosure,
	TelemetryInformationType,
	TelemetryType,
} from '@domain/telemetry';
import { getDisclosureScore, getInformationTypeScore, getTypeScore } from './telemetry';

test.each<[TelemetryDisclosure, number]>([
	['NONE', 0],
	['DOCS', 0.25],
	['USAGE', 0.5],
	['INITIALIZATION', 0.75],
	['INSTALLATION', 1],
])(`getDisclosureScore given %s, returns %i`, (disclosure, score) =>
	expect(getDisclosureScore(disclosure)).toEqual(score)
);

test.each<[TelemetryInformationType, number]>([
	['PERSONAL', 0],
	['PROJECT', 0.25],
	['DEVICE', 0.5],
	['USAGE', 0.75],
	['ENVIRONMENT', 1],
])(`getInformationTypeScore given %s, returns %i`, (infoType, score) =>
	expect(getInformationTypeScore([infoType])).toEqual(score)
);

test.each<[TelemetryType, number]>([
	['OPT_OUT', 0],
	['OPT_IN', 0.5],
	['NONE', 1],
])(`getTypeScore give given %s, returns %i`, (type, score) =>
	expect(getTypeScore(type)).toEqual(score)
);
