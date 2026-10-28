import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('git'),
  fileExtensions: ['gitattributes', 'gitignore', 'gitkeep', 'gitmodules']
});
