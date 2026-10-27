import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('book'),
  fileExtensions: [
    'doc',
    'docx',
    'mdx',
    'odp',
    'ods',
    'odt',
    'pdf',
    'ppt',
    'pptx',
    'rtf',
    'txt',
    'xls',
    'xlsx'
  ]
});
