import { Manifest, Appearance } from './types';
import { getIconDefinitions } from './definitions';

export const getManifest = (appearance: Appearance): Manifest => {
  const iconPath = (iconName: string) =>
    `./icons/${iconName}${appearance === 'dark' ? '_dark' : ''}.svg`;

  return {
    name: `JetBrains Int Icons (${appearance === 'dark' ? 'Dark' : 'Light'})`,
    appearance,
    defaultFolderIcons: {
      collapsed: iconPath('folder'),
      expanded: iconPath('folder_open')
    },
    iconDefinitions: getIconDefinitions(iconPath)
  };
};
