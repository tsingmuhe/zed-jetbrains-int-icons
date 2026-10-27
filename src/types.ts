export type Appearance = 'light' | 'dark';

export type IconPath = (iconName: string) => string;

export type DirectoryIcons = {
  collapsed?: string;
  expanded?: string;
};

export type IconTheme = {
  name: string;
  appearance: Appearance;
  directory_icons: DirectoryIcons;
  named_directory_icons: Record<string, DirectoryIcons>;
  chevron_icons?: DirectoryIcons;
  file_stems: Record<string, string>;
  file_suffixes: Record<string, string>;
  file_icons: Record<string, { path: string }>;
};

export type ManifestIconDefinition = {
  iconPath: string;
  fileNames?: readonly string[];
  fileExtensions?: readonly string[];
  folderNames?: {
    collapsed?: readonly string[];
    expanded?: readonly string[];
  };
};

export type Manifest = {
  name: string;
  appearance: Appearance;
  defaultFolderIcons?: DirectoryIcons;
  chevronIcons?: DirectoryIcons;
  iconDefinitions?: Record<string, ManifestIconDefinition>;
};
