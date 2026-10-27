import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('cpp'),
  fileExtensions: [
    'c++',
    'h++',
    'cc',
    'cpp',
    'cppm',
    'cxx',
    'hh',
    'hpp',
    'hxx',
    'inl',
    'ixx'
  ]
});
