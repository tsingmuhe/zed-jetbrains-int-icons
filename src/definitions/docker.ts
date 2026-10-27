import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('docker'),
  fileNames: ['Containerfile', 'Dockerfile', '.dockerignore'],
  fileExtensions: [
    'docker-compose.yml',
    'docker-compose.yaml',
    'compose.yml',
    'compose.yaml'
  ]
});
