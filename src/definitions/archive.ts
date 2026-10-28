import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('archive'),
  fileExtensions: [
    'zip',
    'rar',
    'tar',
    'gz',
    'bz2',
    'xz',
    'iso',
    'dmg',
    'jar',
    'war',
    'egg',
    'apk',
    '7z',
    'rpm',
    'deb',
    'gzip'
  ]
});
