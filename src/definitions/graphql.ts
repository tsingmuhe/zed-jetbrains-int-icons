import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('graphql'),
  fileExtensions: ['gql', 'graphql', 'graphqls']
});
