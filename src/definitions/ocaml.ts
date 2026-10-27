import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('ocaml'),
  fileExtensions: ['ml', 'mli', 'mlx']
});
