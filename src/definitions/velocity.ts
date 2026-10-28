import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('velocity'),
  fileExtensions: ['ft', 'vm', 'vsl']
});
