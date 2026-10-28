import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('deno'),
  fileExtensions: ['deno.json', 'deno.jsonc', 'deno.lock']
});
