import {BlurhashImg} from '../blurhash-img';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('blurhash-img', () => {
  test('is defined', () => {
    const el = document.createElement('blurhash-img');
    assert.instanceOf(el, BlurhashImg);
  });

  test('renders with default values', async () => {
    const el = await fixture(
      html`<blurhash-img hash="L?H..]S5Rjaz?wR+f5fkIVV@t7fQ"></blurhash-img>`
    );
    assert.shadowDom.equal(
      el,
      `<div class="wrapper">
        <canvas
          id="canvas"
          width="32"
          height="32"
        ></canvas>
      </div>`
    );
  });
});
