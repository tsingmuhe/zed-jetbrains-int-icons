import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('nim'),
  fileExtensions: ['nim', 'nims', 'nimble']
});
