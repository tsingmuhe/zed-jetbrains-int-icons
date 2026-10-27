import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('code'),
  fileExtensions: ['handlebars', 'metadata', 'rkt', 'scm']
});
