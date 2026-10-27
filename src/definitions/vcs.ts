import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('git'),
  fileExtensions: [
    'COMMIT_EDITMSG',
    'EDIT_DESCRIPTION',
    'MERGE_MSG',
    'NOTES_EDITMSG',
    'TAG_EDITMSG',
    'gitattributes',
    'gitignore',
    'gitkeep',
    'gitmodules'
  ]
});
