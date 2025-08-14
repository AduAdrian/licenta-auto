// src/content/registry.tsx
import React from 'react';
import A1Solutii from './partA/A1Solutii';
import A2Parametri from './partA/A2Parametri';
import A3Autopropulsare from './partA/A3Autopropulsare';
import A4Tractiune from './partA/A4Tractiune';
-h
type Entry = { prefix: string; Component: React.FC };

const entries: Entry[] = [
  { prefix: '/partea-a/1-studiul-solutiilor-similare-si-tendinte/1-1-solutii-similare', Component: A1Solutii },
  { prefix: '/partea-a/2-alegerea-parametrilor-principali', Component: A2Parametri },
  { prefix: '/partea-a/3-conditii-autopropulsare', Component: A3Autopropulsare },
  { prefix: '/partea-a/4-calculul-de-tractiune', Component: A4Tractiune }
];

export function resolveContent(pathname: string): React.FC | null {
  const hit = entries.find(e => pathname.startsWith(e.prefix));
  return hit ? hit.Component : null;
}
