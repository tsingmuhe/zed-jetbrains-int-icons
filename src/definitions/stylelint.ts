import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('stylelint'),
  fileExtensions: [
    'stylelint.config.cjs',
    'stylelint.config.js',
    'stylelint.config.mjs',
    'stylelintignore',
    'stylelintrc',
    'stylelintrc.cjs',
    'stylelintrc.js',
    'stylelintrc.json',
    'stylelintrc.mjs',
    'stylelintrc.yaml',
    'stylelintrc.yml'
  ]
});
