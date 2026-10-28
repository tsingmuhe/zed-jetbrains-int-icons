import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('protobuf'),
  fileExtensions: ['proto', 'pb', 'textproto', 'txtpb']
});
