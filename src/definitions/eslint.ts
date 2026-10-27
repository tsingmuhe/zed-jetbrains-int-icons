import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('eslint'),
  fileExtensions: [
    'eslint.config.cjs',
    'eslint.config.cts',
    'eslint.config.js',
    'eslint.config.mjs',
    'eslint.config.mts',
    'eslint.config.ts',
    'eslintrc',
    'eslintrc.js',
    'eslintrc.json'
  ]
});
