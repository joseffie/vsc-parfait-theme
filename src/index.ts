import { writeFile } from 'fs';

import { Theme } from './typing';
import syntax from './scopes/scopes';
import semanticTokens from './scopes/semanticTokens';
import ui from './ui';

import { classic } from './variations/classic';

function makeTheme(name: string, theme: Theme, hc?: boolean): void {
  const themeTemplate = {
    $schema: 'vscode://schemas/color-theme',
    name: `Parfait ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
    semanticHighlighting: true,
    semanticTokenColors: semanticTokens(theme),
    colors: ui(theme, hc),
    tokenColors: syntax(theme, hc),
  };

  writeFile(`themes/parfait-theme-${name}.json`, JSON.stringify(themeTemplate), (err) => {
    if (err) console.log('error', err);
  });
}

// Classic
makeTheme('classic', classic);
