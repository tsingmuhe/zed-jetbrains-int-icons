import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('image'),
  fileExtensions: [
    'avif',
    'bmp',
    'gif',
    'heic',
    'heif',
    'ico',
    'j2k',
    'jfif',
    'jp2',
    'jpeg',
    'jpg',
    'jxl',
    'png',
    'psd',
    'qoi',
    'svg',
    'tiff',
    'webp'
  ]
});
