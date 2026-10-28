import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('visualstudio'),
  fileExtensions: ['vb', 'vbs', 'sln', 'suo']
});
