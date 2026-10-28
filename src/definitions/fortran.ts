import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('fortran'),
  fileExtensions: ['f', 'f77', 'f90', 'f95', 'f03', 'f08']
});
