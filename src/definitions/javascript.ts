import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('javascript'),
  fileExtensions: ['cjs', 'js', 'mjs']
});
