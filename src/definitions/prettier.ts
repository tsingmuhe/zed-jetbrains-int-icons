import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('prettier'),
  fileExtensions: [
    'prettier.config.cjs',
    'prettier.config.js',
    'prettier.config.mjs',
    'prettierignore',
    'prettierrc',
    'prettierrc.cjs',
    'prettierrc.js',
    'prettierrc.json',
    'prettierrc.json5',
    'prettierrc.mjs',
    'prettierrc.toml',
    'prettierrc.yaml',
    'prettierrc.yml'
  ]
});
