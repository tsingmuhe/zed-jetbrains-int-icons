import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('jsp'),
  fileExtensions: ['jsp', 'jsf', 'jspf']
});
