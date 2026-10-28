import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('pnpmlock'),
  fileExtensions: ['pnpm-lock.yaml']
});
