import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('file'),
  fileExtensions: [
    'mod',
    'work',
    'txt',
    'mdx',
    'bicep',
    'cr',
    'ecr',
    'cue',
    'sol'
  ]
});
