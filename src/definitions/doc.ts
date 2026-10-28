import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('doc'),
  fileExtensions: ['doc', 'docx', 'docm', 'odt', 'rtf']
});
