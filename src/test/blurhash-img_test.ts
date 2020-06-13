import {BlurhashImg} from '../blurhash-img';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('blurhash-img', () => {
  test('is defined', () => {
    const el = document.createElement('blurhash-img');
    assert.instanceOf(el, BlurhashImg);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<blurhash-img></blurhash-img>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<blurhash-img hash="Test"></blurhash-img>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });
});
