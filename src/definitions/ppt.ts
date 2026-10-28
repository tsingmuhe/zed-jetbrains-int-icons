import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('ppt'),
  fileExtensions: ['ppt', 'pptx', 'pptm', 'odp']
});
