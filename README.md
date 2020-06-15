# blurhash-img

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/fpapado/blurhash-img)

A Web Component for decoding [blurhash strings](https://github.com/woltapp/blurhash) onto a canvas.

## Usage

This component is currently not bundled. If you are using a bundler, the dependencies for this component must also be bundled.

Install the component:

```shell
npm install blurhash-img
```

As a Web Component, you must decide when to register it.
Refer to the "Registering with ..." sections below for how to do that.

### Using in HTML

You can set the `hash` attribute in HTML.

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="https://unpkg.com/blurhash-img?module"></script>
    <style>
      blurhash-img {
        width: 400px;
        height: 300px;
     }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<blurhash-img 
  hash="L?H..]S5Rjaz?wR+f5fkIVV@t7fQ"
  style="--aspect-ratio: 4/6">
</blurhash-img>
```

Note that by default blurhash-img needs an aspect ratio to hold its place in the layout, and scale correctly. This makes it similar to how images behave, after they have been replaced.

You set the layout via the `--aspect-ratio` custom property.

You can do this via CSS selectors:

```css
blurhash-img {
  --aspect-ratio: 4/6;
}
```

Or via the inline `style` attribute:

```html
<blurhash-img 
  hash="L?H..]S5Rjaz?wR+f5fkIVV@t7fQ"
  style="--aspect-ratio: 4/6">
</blurhash-img>
```

### Registering with HTML script tags

In an HTML page, add the following script tag:

```html
<script type="module">
import './path-to-blurhash-img.js';
</script>
```

Or:

```html
<script type="module" src="./path-to-blurhash-img.js"></script>
```

For both of these cases, you need the full, qualified path to the script.
This might be a pain to do manually, in which case consider registering with JavaScript, and/or using a bundler, like webpack or Rollup.

### Registering with JavaScript

You can include this element in your JavaScript bundle, and it will register itself. Import the package directly, for `.define` to work.

In a JavaScript module:

```js
import 'blurhash-img';
```

Or:

You can register the component manually via the customElements.define method. Due to how the custom elements registry works at the moment, you will need to create a subclass around the component.

```js
import {BlurhashImg} from 'blurhash-img';

window.customElements.define('blurhash-img', class extends BlurhashImg{});
```

### Using with declarative rendering libraries

`<blurhash-img>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html.

Example for lit-html:

```js
import {html, render} from 'lit-html';

const hash="L?H..]S5Rjaz?wR+f5fkIVV@t7fQ";

render(html`
  <blurhash-img .hash="${hash}"></blurhash-img>
`, document.body);
```

### CDN

npm CDNs like [unpkg.com]() can directly serve files that have been published to npm. This works great for standard JavaScript modules that the browser can load natively.

Using a CDN might help you get started!

For this element to work from unpkg.com specifically, you need to include the `?module` query parameter, which tells unpkg.com to rewrite "bare" module specificers to full URLs.

#### HTML

```html
<script type="module" src="https://unpkg.com/blurhash-img?module"></script>
```

#### JavaScript

```html
import {BlurhashImg} from 'https://unpkg.com/blurhash-img?module';
```

## Development Setup

Install dependencies:

```bash
npm i
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Testing

This sample uses Karma, Chai, Mocha, and the open-wc test helpers for testing. See the [open-wc testing documentation](https://open-wc.org/testing/testing.html) for more information.

Tests can be run with the `test` script:

```bash
npm test
```

## Dev Server

This sample uses open-wc's [es-dev-server](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server) for previewing the project without additional build steps. ES dev server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html.

## Editing

If you use VS Code, we highly reccomend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:
  - Syntax highlighting
  - Type-checking
  - Code completion
  - Hover-over docs
  - Jump to definition
  - Linting
  - Quick Fixes
  
  The project is setup to reccomend lit-plugin to VS Code users if they don't already have it installed.

## Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json` and `tsconfig.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Polymer Project's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when commiting files, but this can be added with Husky and and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## Static Site

This project includes a simple website generated with the [eleventy](11ty.dev) static site generator and the templates and pages in `/docs-src`. The site is generated to `/docs` and intended to be checked in so that GitHub pages can serve the site [from `/docs` on the master branch](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

To enable the site go to the GitHub settings and change the GitHub Pages &quot;Source&quot; setting to &quot;master branch /docs folder&quot;.</p>

To build the site, run:

```bash
npm run docs
```

To serve the site locally, run:

```bash
npm run docs:serve
```

To watch the site files, and re-build automatically, run:

```bash
npm run docs:watch
```

The site will usually be served at http://localhost:8000.

## More information

See [Get started](https://lit-element.polymer-project.org/guide/start) on the LitElement site for more information.
