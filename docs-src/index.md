---
layout: page.11ty.cjs
title: <blurhash-img> ⌲ Home
---

# &lt;blurhash-img>

`<blurhash-img>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<blurhash-img>` is just an HTML element. You can it anywhere you can use HTML!

```html
<blurhash-img></blurhash-img>
```

  </div>
  <div>

<blurhash-img></blurhash-img>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<blurhash-img>` can be configured with attributes in plain HTML.

```html
<blurhash-img hash="L?H..]S5Rjaz?wR+f5fkIVV@t7fQ"></blurhash-img>
```

  </div>
  <div>

<blurhash-img hash="L?H..]S5Rjaz?wR+f5fkIVV@t7fQ"></blurhash-img>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<blurhash-img>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;blurhash-img&gt;</h2>
  <blurhash-img .hash="${hash}"></blurhash-img>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;blurhash-img&gt;</h2>
<blurhash-img hash="L?H..]S5Rjaz?wR+f5fkIVV@t7fQ"></blurhash-img>

  </div>
</section>
