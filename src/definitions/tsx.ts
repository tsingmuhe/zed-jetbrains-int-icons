import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('tsx'),
  fileExtensions: ['ctsx', 'mtsx', 'tsx']
});
