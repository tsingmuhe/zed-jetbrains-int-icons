import { IconPath, ManifestIconDefinition } from '../types';
import { createDefinition as createArchiveDefinition } from './archive';
import { createDefinition as createAstroDefinition } from './astro';
import { createDefinition as createAudioDefinition } from './audio';
import { createDefinition as createBallerinaDefinition } from './ballerina';
import { createDefinition as createBicepDefinition } from './bicep';
import { createDefinition as createBinaryDefinition } from './binary';
import { createDefinition as createBunDefinition } from './bun';
import { createDefinition as createCDefinition } from './c';
import { createDefinition as createCairoDefinition } from './cairo';
import { createDefinition as createCodeDefinition } from './code';
import { createDefinition as createCoffeescriptDefinition } from './coffeescript';
import { createDefinition as createCppDefinition } from './cpp';
import { createDefinition as createCrystalDefinition } from './crystal';
import { createDefinition as createCsharpDefinition } from './csharp';
import { createDefinition as createCsprojDefinition } from './csproj';
import { createDefinition as createCssDefinition } from './css';
import { createDefinition as createCueDefinition } from './cue';
import { createDefinition as createDartDefinition } from './dart';
import { createDefinition as createDefaultDefinition } from './default';
import { createDefinition as createDenoDefinition } from './deno';
import { createDefinition as createDiffDefinition } from './diff';
import { createDefinition as createDocDefinition } from './doc';
import { createDefinition as createDockerDefinition } from './docker';
import { createDefinition as createElixirDefinition } from './elixir';
import { createDefinition as createElmDefinition } from './elm';
import { createDefinition as createErlangDefinition } from './erlang';
import { createDefinition as createEslintDefinition } from './eslint';
import { createDefinition as createFontDefinition } from './font';
import { createDefinition as createFortranDefinition } from './fortran';
import { createDefinition as createFreemarkerDefinition } from './freemarker';
import { createDefinition as createFsharpDefinition } from './fsharp';
import { createDefinition as createFsprojDefinition } from './fsproj';
import { createDefinition as createGitDefinition } from './git';
import { createDefinition as createGitlabDefinition } from './gitlab';
import { createDefinition as createGleamDefinition } from './gleam';
import { createDefinition as createGoDefinition } from './go';
import { createDefinition as createGomodDefinition } from './gomod';
import { createDefinition as createGosumDefinition } from './gosum';
import { createDefinition as createGotemplateDefinition } from './gotemplate';
import { createDefinition as createGoworkDefinition } from './gowork';
import { createDefinition as createGradleDefinition } from './gradle';
import { createDefinition as createGraphqlDefinition } from './graphql';
import { createDefinition as createGroovyDefinition } from './groovy';
import { createDefinition as createHaskellDefinition } from './haskell';
import { createDefinition as createHclDefinition } from './hcl';
import { createDefinition as createHelmDefinition } from './helm';
import { createDefinition as createHerokuDefinition } from './heroku';
import { createDefinition as createHtmlDefinition } from './html';
import { createDefinition as createIgnoreDefinition } from './ignore';
import { createDefinition as createImageDefinition } from './image';
import { createDefinition as createIpynbDefinition } from './ipynb';
import { createDefinition as createJavaDefinition } from './java';
import { createDefinition as createJavascriptDefinition } from './javascript';
import { createDefinition as createJsonDefinition } from './json';
import { createDefinition as createJspDefinition } from './jsp';
import { createDefinition as createJsxDefinition } from './jsx';
import { createDefinition as createJuliaDefinition } from './julia';
import { createDefinition as createKdlDefinition } from './kdl';
import { createDefinition as createKotlinDefinition } from './kotlin';
import { createDefinition as createLessDefinition } from './less';
import { createDefinition as createLockDefinition } from './lock';
import { createDefinition as createLogDefinition } from './log';
import { createDefinition as createLuaDefinition } from './lua';
import { createDefinition as createLuauDefinition } from './luau';
import { createDefinition as createMarkdownDefinition } from './markdown';
import { createDefinition as createMetalDefinition } from './metal';
import { createDefinition as createNimDefinition } from './nim';
import { createDefinition as createNixDefinition } from './nix';
import { createDefinition as createNpmDefinition } from './npm';
import { createDefinition as createOcamlDefinition } from './ocaml';
import { createDefinition as createOdinDefinition } from './odin';
import { createDefinition as createPdfDefinition } from './pdf';
import { createDefinition as createPhpDefinition } from './php';
import { createDefinition as createPnpmDefinition } from './pnpm';
import { createDefinition as createPnpmlockDefinition } from './pnpmlock';
import { createDefinition as createPPTDefinition } from './ppt';
import { createDefinition as createPrettierDefinition } from './prettier';
import { createDefinition as createPrismaDefinition } from './prisma';
import { createDefinition as createProtobufDefinition } from './protobuf';
import { createDefinition as createPuppetDefinition } from './puppet';
import { createDefinition as createPythonDefinition } from './python';
import { createDefinition as createRDefinition } from './r';
import { createDefinition as createRocDefinition } from './roc';
import { createDefinition as createRubyDefinition } from './ruby';
import { createDefinition as createRustDefinition } from './rust';
import { createDefinition as createSassDefinition } from './sass';
import { createDefinition as createScalaDefinition } from './scala';
import { createDefinition as createSettingsDefinition } from './settings';
import { createDefinition as createSolidityDefinition } from './solidity';
import { createDefinition as createStorageDefinition } from './storage';
import { createDefinition as createStylelintDefinition } from './stylelint';
import { createDefinition as createSurrealqlDefinition } from './surrealql';
import { createDefinition as createSvelteDefinition } from './svelte';
import { createDefinition as createSwiftDefinition } from './swift';
import { createDefinition as createTclDefinition } from './tcl';
import { createDefinition as createTemplateDefinition } from './template';
import { createDefinition as createTerminalDefinition } from './terminal';
import { createDefinition as createTerraformDefinition } from './terraform';
import { createDefinition as createThriftDefinition } from './thrift';
import { createDefinition as createTomlDefinition } from './toml';
import { createDefinition as createTsxDefinition } from './tsx';
import { createDefinition as createTypescriptDefinition } from './typescript';
import { createDefinition as createVDefinition } from './v';
import { createDefinition as createVbprojDefinition } from './vbproj';
import { createDefinition as createVcsDefinition } from './vcs';
import { createDefinition as createVelocityDefinition } from './velocity';
import { createDefinition as createVideoDefinition } from './video';
import { createDefinition as createVisualstudioDefinition } from './visualstudio';
import { createDefinition as createViteDefinition } from './vite';
import { createDefinition as createVsSlnDefinition } from './vs_sln';
import { createDefinition as createVsSuoDefinition } from './vs_suo';
import { createDefinition as createVueDefinition } from './vue';
import { createDefinition as createVyperDefinition } from './vyper';
import { createDefinition as createWgslDefinition } from './wgsl';
import { createDefinition as createXlsDefinition } from './xls';
import { createDefinition as createXmlDefinition } from './xml';
import { createDefinition as createYamlDefinition } from './yaml';
import { createDefinition as createYarnDefinition } from './yarn';
import { createDefinition as createYarnlockDefinition } from './yarnlock';
import { createDefinition as createZigDefinition } from './zig';

export const getIconDefinitions = (
  iconPath: IconPath
): Record<string, ManifestIconDefinition> => ({
  archive: createArchiveDefinition(iconPath),
  astro: createAstroDefinition(iconPath),
  audio: createAudioDefinition(iconPath),
  ballerina: createBallerinaDefinition(iconPath),
  bicep: createBicepDefinition(iconPath),
  binary: createBinaryDefinition(iconPath),
  bun: createBunDefinition(iconPath),
  c: createCDefinition(iconPath),
  cairo: createCairoDefinition(iconPath),
  code: createCodeDefinition(iconPath),
  coffeescript: createCoffeescriptDefinition(iconPath),
  cpp: createCppDefinition(iconPath),
  crystal: createCrystalDefinition(iconPath),
  csharp: createCsharpDefinition(iconPath),
  csproj: createCsprojDefinition(iconPath),
  css: createCssDefinition(iconPath),
  cue: createCueDefinition(iconPath),
  dart: createDartDefinition(iconPath),
  default: createDefaultDefinition(iconPath),
  deno: createDenoDefinition(iconPath),
  diff: createDiffDefinition(iconPath),
  doc: createDocDefinition(iconPath),
  docker: createDockerDefinition(iconPath),
  elixir: createElixirDefinition(iconPath),
  elm: createElmDefinition(iconPath),
  erlang: createErlangDefinition(iconPath),
  eslint: createEslintDefinition(iconPath),
  font: createFontDefinition(iconPath),
  fortran: createFortranDefinition(iconPath),
  freemarker: createFreemarkerDefinition(iconPath),
  fsharp: createFsharpDefinition(iconPath),
  fsproj: createFsprojDefinition(iconPath),
  git: createGitDefinition(iconPath),
  gitlab: createGitlabDefinition(iconPath),
  gleam: createGleamDefinition(iconPath),
  go: createGoDefinition(iconPath),
  gomod: createGomodDefinition(iconPath),
  gosum: createGosumDefinition(iconPath),
  gotemplate: createGotemplateDefinition(iconPath),
  gowork: createGoworkDefinition(iconPath),
  gradle: createGradleDefinition(iconPath),
  graphql: createGraphqlDefinition(iconPath),
  groovy: createGroovyDefinition(iconPath),
  haskell: createHaskellDefinition(iconPath),
  hcl: createHclDefinition(iconPath),
  helm: createHelmDefinition(iconPath),
  heroku: createHerokuDefinition(iconPath),
  html: createHtmlDefinition(iconPath),
  ignore: createIgnoreDefinition(iconPath),
  image: createImageDefinition(iconPath),
  ipynb: createIpynbDefinition(iconPath),
  java: createJavaDefinition(iconPath),
  javascript: createJavascriptDefinition(iconPath),
  json: createJsonDefinition(iconPath),
  jsp: createJspDefinition(iconPath),
  jsx: createJsxDefinition(iconPath),
  julia: createJuliaDefinition(iconPath),
  kdl: createKdlDefinition(iconPath),
  kotlin: createKotlinDefinition(iconPath),
  less: createLessDefinition(iconPath),
  lock: createLockDefinition(iconPath),
  log: createLogDefinition(iconPath),
  lua: createLuaDefinition(iconPath),
  luau: createLuauDefinition(iconPath),
  markdown: createMarkdownDefinition(iconPath),
  metal: createMetalDefinition(iconPath),
  nim: createNimDefinition(iconPath),
  nix: createNixDefinition(iconPath),
  npm: createNpmDefinition(iconPath),
  ocaml: createOcamlDefinition(iconPath),
  odin: createOdinDefinition(iconPath),
  pdf: createPdfDefinition(iconPath),
  php: createPhpDefinition(iconPath),
  pnpm: createPnpmDefinition(iconPath),
  pnpmlock: createPnpmlockDefinition(iconPath),
  ppt: createPPTDefinition(iconPath),
  prettier: createPrettierDefinition(iconPath),
  prisma: createPrismaDefinition(iconPath),
  protobuf: createProtobufDefinition(iconPath),
  puppet: createPuppetDefinition(iconPath),
  python: createPythonDefinition(iconPath),
  r: createRDefinition(iconPath),
  roc: createRocDefinition(iconPath),
  ruby: createRubyDefinition(iconPath),
  rust: createRustDefinition(iconPath),
  sass: createSassDefinition(iconPath),
  scala: createScalaDefinition(iconPath),
  settings: createSettingsDefinition(iconPath),
  solidity: createSolidityDefinition(iconPath),
  storage: createStorageDefinition(iconPath),
  stylelint: createStylelintDefinition(iconPath),
  surrealql: createSurrealqlDefinition(iconPath),
  svelte: createSvelteDefinition(iconPath),
  swift: createSwiftDefinition(iconPath),
  tcl: createTclDefinition(iconPath),
  template: createTemplateDefinition(iconPath),
  terminal: createTerminalDefinition(iconPath),
  terraform: createTerraformDefinition(iconPath),
  thrift: createThriftDefinition(iconPath),
  toml: createTomlDefinition(iconPath),
  tsx: createTsxDefinition(iconPath),
  typescript: createTypescriptDefinition(iconPath),
  v: createVDefinition(iconPath),
  vbproj: createVbprojDefinition(iconPath),
  vcs: createVcsDefinition(iconPath),
  velocity: createVelocityDefinition(iconPath),
  video: createVideoDefinition(iconPath),
  visualstudio: createVisualstudioDefinition(iconPath),
  vite: createViteDefinition(iconPath),
  vs_sln: createVsSlnDefinition(iconPath),
  vs_suo: createVsSuoDefinition(iconPath),
  vue: createVueDefinition(iconPath),
  vyper: createVyperDefinition(iconPath),
  wgsl: createWgslDefinition(iconPath),
  xls: createXlsDefinition(iconPath),
  xml: createXmlDefinition(iconPath),
  yaml: createYamlDefinition(iconPath),
  yarn: createYarnDefinition(iconPath),
  yarnlock: createYarnlockDefinition(iconPath),
  zig: createZigDefinition(iconPath)
});
