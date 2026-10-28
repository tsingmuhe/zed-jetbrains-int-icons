import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('settings'),
  fileExtensions: ['conf', 'config', 'cfg', 'ini', 'properties']
});
