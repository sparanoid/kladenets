# Kladenets (aka. Root Variables)

Minimal, future-proof native CSS variables (CSS Custom Properties) framework in `:root` designed with the following features:

- Minimal variables defined: colors, typography, and layout helpers.
- HSL colors: all colors are HSL-based for more straightforward manipulation (before we have [CSS Color Module Level 4](https://drafts.csswg.org/css-color/) in hands).
- Easy to migrate: no *magic* variables for flex, or grid layout. You can continue to use your existing layout system.
- Flexible to extend: all variables can be overridden later in `:root` or in specific scopes.
- Dark mode ready: extend your existing app with `prefers-color-scheme: dark`, tweak colors with HSL, and you're ready to go.

## Installation

### unpkg

```html
<link rel="stylesheet" href="https://unpkg.com/kladenets">
```

### jsDelivr

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kladenets/kladenets.css">
<!-- OR latest on GitHub -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sparanoid/kladenets/kladenets.css">
```

### Yarn

```shell
yarn add kladenets
```

### npm

```shell
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
