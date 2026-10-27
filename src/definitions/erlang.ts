import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('erlang'),
  fileExtensions: [
    'Emakefile',
    'app.src',
    'erl',
    'escript',
    'hrl',
    'rebar.config',
    'xrl',
    'yrl'
  ]
});
