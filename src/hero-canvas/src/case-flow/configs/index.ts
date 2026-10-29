import type { CaseGraphConfig } from './types';
import { innovaMedicalConfig } from './innova-medical';
import { mrke3dConfig } from './mrke-3d';
import { liveConcertSyncConfig } from './live-concert-sync';
import { collaragentConfig } from './collaragent';
import { stratawrightConfig } from './stratawright';
import { ieeeVrConfig } from './ieee-vr';
import { virtualPrincipalConfig } from './virtual-principal';
import { splatRoomEditorConfig } from './splat-room-editor';

export const caseConfigs: Record<string, CaseGraphConfig> = {
  'innova-medical': innovaMedicalConfig,
  'mrke-3d': mrke3dConfig,
  'live-concert-sync': liveConcertSyncConfig,
  collaragent: collaragentConfig,
  stratawright: stratawrightConfig,
  'ieee-vr': ieeeVrConfig,
  'ieee-vr-conflict': ieeeVrConfig,
  'virtual-principal': virtualPrincipalConfig,
  'splat-room-editor': splatRoomEditorConfig,
};

export function getCaseConfig(slug: string): CaseGraphConfig | null {
  return caseConfigs[slug] || null;
}

export * from './types';
