import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('font'),
  fileExtensions: ['otf', 'ttf', 'woff', 'woff2']
});
