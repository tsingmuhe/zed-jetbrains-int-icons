import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('helm'),
  fileExtensions: [
    'helmfile.yaml',
    'helmfile.yml',
    'Chart.yaml',
    'Chart.yml',
    'Chart.lock',
    'values.yaml',
    'values.yml',
    'requirements.yaml',
    'requirements.yml',
    'tpl'
  ]
});
