import type { DirectoryIcons, IconTheme, Manifest } from './types';

const setDirectoryIcons = (
  target: Record<string, DirectoryIcons>,
  names: readonly string[] | undefined,
  key: keyof DirectoryIcons,
  iconPath: string
): void => {
  for (const name of names ?? []) {
    target[name] = { ...target[name], [key]: iconPath };
  }
};

export const getTheme = (manifest: Manifest): IconTheme => {
  const fileIcons: IconTheme['file_icons'] = {};
  const fileSuffixes: IconTheme['file_suffixes'] = {};
  const fileStems: IconTheme['file_stems'] = {};
  const namedDirectoryIcons: IconTheme['named_directory_icons'] = {};

  for (const [iconName, definition] of Object.entries(
    manifest.iconDefinitions ?? {}
  )) {
    fileIcons[iconName] = { path: definition.iconPath };

    for (const fileName of definition.fileNames ?? []) {
      fileStems[fileName] = iconName;
    }

    for (const fileExtension of definition.fileExtensions ?? []) {
      fileSuffixes[fileExtension] = iconName;
    }

    setDirectoryIcons(
      namedDirectoryIcons,
      definition.folderNames?.collapsed,
      'collapsed',
      definition.iconPath
    );
    setDirectoryIcons(
      namedDirectoryIcons,
      definition.folderNames?.expanded,
      'expanded',
      definition.iconPath
    );
  }

  return {
    name: manifest.name,
    appearance: manifest.appearance,
    directory_icons: manifest.defaultFolderIcons ?? {},
    named_directory_icons: namedDirectoryIcons,
    chevron_icons: manifest.chevronIcons,
    file_stems: fileStems,
    file_suffixes: fileSuffixes,
    file_icons: fileIcons
  };
};
