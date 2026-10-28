import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('binary'),
  fileExtensions: ['hex', 'bin', 'exe', 'msi', 'class']
});
