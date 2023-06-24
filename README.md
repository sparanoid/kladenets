# Kladenets (aka. Root Variables)

[![Test & Build](https://github.com/sparanoid/kladenets/actions/workflows/test.yml/badge.svg)](https://github.com/sparanoid/kladenets/actions/workflows/test.yml)
[![npm version](https://img.shields.io/npm/v/kladenets.svg?style=flat)](https://www.npmjs.com/package/kladenets)
[![Chromatic visual testing](https://shields.io/badge/visual_testing-chromatic-orange?logo=chromatic&style=flat)](https://chromatic.com/library?appId=60f5c0ae4a7e3f003ba05641&branch=master)
[![Online Storybook](https://shields.io/badge/storybook-branch:_master-ff4785?logo=storybook&style=flat)](https://master--60f5c0ae4a7e3f003ba05641.chromatic.com)

Minimal, future-proof native CSS variables (CSS Custom Properties) framework in `:root` designed with the following features:

- Minimal variables defined: colors, typography, and layout helpers.
- HSL colors: all colors are HSL-based for more straightforward manipulation (before we have [CSS Color Module Level 4](https://drafts.csswg.org/css-color/) in hands).
- Easy to migrate: no *magic* variables for flex, or grid layout. You can continue to use your existing layout system.
- Flexible to extend: all variables can be overridden later in `:root` or in specific scopes.
- Dark mode ready: extend your existing app with `prefers-color-scheme: dark`, tweak colors with HSL, and you're ready to go.

## Installation

### unpkg

```html
<!-- Stable -->
<link rel="stylesheet" href="https://unpkg.com/kladenets">

<!-- Latest -->
<link rel="stylesheet" href="https://unpkg.com/kladenets@next">
```

### jsDelivr

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kladenets/kladenets.css">
```

### Package Manager

```shell
pnpm add kladenets
yarn add kladenets
npm i -S kladenets
```

## Usage

### Direct CSS

See `app.css` for example.

### Import `node_modules` in Webpack

```css
@import '~kladenets';

body {
  color: var(--text-color);
}
```

### Import in JavaScript

```js
import 'kladenets'

// styled-components example
const Component = styled.div`
  color: var(--text-color);
`
```

## License

MIT
