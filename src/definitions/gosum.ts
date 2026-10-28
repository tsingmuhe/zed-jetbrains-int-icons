import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('gosum'),
  fileNames: ['go.sum', 'go.work.sum']
});
