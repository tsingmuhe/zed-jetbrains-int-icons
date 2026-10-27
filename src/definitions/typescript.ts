import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('typescript'),
  fileExtensions: ['cts', 'mts', 'ts']
});
