import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('react'),
  fileExtensions: ['cjsx', 'ctsx', 'jsx', 'mjsx', 'mtsx', 'tsx']
});
