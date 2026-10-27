import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('terminal'),
  fileExtensions: [
    'bash',
    'bash_aliases',
    'bash_login',
    'bash_logout',
    'bash_profile',
    'bashrc',
    'brushrc',
    'fish',
    'nu',
    'profile',
    'ps1',
    'sh',
    'zlogin',
    'zlogout',
    'zprofile',
    'zsh',
    'zsh_aliases',
    'zsh_histfile',
    'zsh_history',
    'zshenv',
    'zshrc'
  ]
});
