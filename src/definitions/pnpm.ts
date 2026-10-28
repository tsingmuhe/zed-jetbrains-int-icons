import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('pnpm'),
  fileExtensions: ['pnpm-workspace.yaml', '.pnpmfile.mjs', '.pnpmfile.cjs']
});
