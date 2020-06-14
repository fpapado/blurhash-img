---
layout: page.11ty.cjs
title: <blurhash-img> ⌲ Home
---

<style>
blurhash-img {
  width: 600px;
  height: 400px;
}
</style>

# &lt;blurhash-img>

A Web Component for decoding [blurhash hashes](https://github.com/woltapp/blurhash) onto a canvas.

## Configure with attributes

<section class="columns">
  <div>

`<blurhash-img>` is an HTML element, that can be configured with attributes in plain HTML.

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

const hash = "L?H..]S5Rjaz?wR+f5fkIVV@t7fQ";

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
