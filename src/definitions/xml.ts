import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('xml'),
  fileExtensions: ['xml', 'plist', 'vbproj', 'fsproj', 'csproj']
});
