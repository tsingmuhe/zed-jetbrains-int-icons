import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('freemarker'),
  fileExtensions: ['ftl', 'ftlh', 'ftlx']
});
