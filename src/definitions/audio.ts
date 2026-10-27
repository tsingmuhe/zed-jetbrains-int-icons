import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('audio'),
  fileExtensions: [
    'aac',
    'flac',
    'm4a',
    'mka',
    'mp3',
    'ogg',
    'opus',
    'wav',
    'wma',
    'wv'
  ]
});
