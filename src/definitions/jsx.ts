import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('jsx'),
  fileExtensions: ['cjsx', 'jsx', 'mjsx']
});
