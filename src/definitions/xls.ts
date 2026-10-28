import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('xls'),
  fileExtensions: ['xls', 'xlsx', 'xlsm', 'ods']
});
