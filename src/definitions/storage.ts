import { IconPath, ManifestIconDefinition } from '../types';

export const createDefinition = (
  iconPath: IconPath
): ManifestIconDefinition => ({
  iconPath: iconPath('database'),
  fileExtensions: [
    'accdb',
    'csv',
    'dat',
    'db',
    'dbf',
    'dll',
    'fmp',
    'fp7',
    'frm',
    'gdb',
    'ib',
    'ldf',
    'mdb',
    'mdf',
    'myd',
    'myi',
    'pdb',
    'psv',
    'RData',
    'rdata',
    'sav',
    'sdf',
    'sql',
    'sqlite',
    'ssv',
    'tsv'
  ]
});
