import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('video'),
  fileExtensions: ['avi', 'm4v', 'mkv', 'mov', 'mp4', 'webm', 'wmv']
});
