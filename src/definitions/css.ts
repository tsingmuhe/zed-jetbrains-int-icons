import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('css'),
  fileExtensions: ['css', 'pcss', 'postcss']
});
