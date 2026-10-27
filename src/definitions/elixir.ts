import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('elixir'),
  fileExtensions: ['eex', 'ex', 'exs', 'heex', 'leex', 'neex']
});
