# Colors

```js script
import { html } from '~/core';
import '~/token-display';
import * as _colors from '~/colors';
```

## Usage

The color palettes are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

You can import the token group from the main entrypoint (or `/tokens`):

```js
import { colors } from '@divriots/starter-simba'; // colors.accent100
```

or a specific color from the token entrypoint:

```js
import { accent100 } from '@divriots/starter-simba/colors';
```

```js preview-story
import { css, LitElement } from '@divriots/starter-simba';
import { accent100 } from '@divriots/starter-simba/colors';

class DemoRed extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 50px;
        height: 50px;
        background-color: ${accent100};
      }
    `;
  }
}
customElements.define('demo-red', DemoRed);

export const usageInCE = () => html`<demo-red></demo-red>`;
```

## Palettes

### Accents

```js story
export const accent = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('accent')
    )}
  ></token-display>`;
```

### Basic

```js story
export const basic = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('basic')
    )}
  ></token-display>`;
```

### Grays DTK

```js story
export const gray = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('gray')
    )}
  ></token-display>`;
```

### Semantic

```js story
export const semantic = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('semantic')
    )}
  ></token-display>`;
```
