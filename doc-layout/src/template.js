import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { breakpoints, styles } from '@divriots/dockit-core/layout';
import { setupSpeedyLinks } from '@divriots/dockit-core/speedy-links';
import { html, unsafeHTML } from '~/core';
import './color-toggler';
import logoSvg from './logo.svg?raw';

export const docLayoutTemplate = (content, context) => {
  setupSpeedyLinks({
    mapLinkUrlToModuleUrl: (url) => {
      return context.mapPageUrlToRenderModuleUrl(url);
    },
  });
  return html`
    <style>
      ${unsafeHTML(styles)} .logo {
        color: #f59e0b;
      }
      .topbar {
        width: 100%;
        display: none;
        align-items: center;
        justify-content: right;
      }
      @media screen and (min-width: ${breakpoints.lg}) {
        .topbar {
          justify-content: unset;
        }
      }
      .story_padded {
        line-height: initial;
      }
      .preview-story .story_padded {
        background-color: var(--simba-bg-color);
        color: var(--simba-text-color);
      }
      html.dark .preview-story .story_padded {
        background-color: var(--simba-bg-color-dark);
        color: var(--simba-text-color-dark);
      }
      .markdown-body {
        padding: 0;
        color: white;
      }
      .markdown-body code:not([class*='language-']),
      .markdown-body tt {
        background-color: transparent;
        border: none;
      }
    </style>
    <dockit-layout
      disable-color-scheme-change
      initial-color-scheme="light"
      .context="${context}"
    >
      <div class="logo" slot="logo" aria-label="starter-simba">HALO</div>
      <div class="prose">${unsafeHTML(content)}</div>
    </dockit-layout>
  `;
};
