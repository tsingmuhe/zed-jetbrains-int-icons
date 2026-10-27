import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('gitlab'),
  fileExtensions: ['gitlab-ci.yml', 'gitlab-ci.yaml']
});
