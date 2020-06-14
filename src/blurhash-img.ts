import {
  html,
  css,
  customElement,
  LitElement,
  property,
  query,
} from 'lit-element';
import {decode} from '@fpapado/blurhash';

@customElement('blurhash-img')
export class BlurhashImg extends LitElement {
  /* Layout notes:
   * Behaves similarly to a blockified image, where you set
   * the width and height via CSS, right on the host.
   * This is useful if you want to do further optimisations,
   * such as placing blurhash-img inside an aspect ratio container.
   */
  static styles = css`
    :host {
      display: block;
    }

    .wrapper {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }

    #canvas {
      position: absolute;
      inset: 0px;
      width: 100%;
      height: 100%;
    }
  `;

  /**
   * The encoded blurhash, as a string.
   */
  @property({type: String}) hash: string | undefined;

  /**
   * The X-axis resolution in which the decoded image will be rendered at. Recommended min. 32px. Large sizes (>128px) will greatly decrease rendering performance.
   */
  @property({type: Number}) resolutionX: number = 32;

  /**
   * The Y-axis resolution in which the decoded image will be rendered at. Recommended min. 32px. Large sizes (>128px) will greatly decrease rendering performance.
   */
  @property({type: Number}) resolutionY: number = 32;

  @query('#canvas') canvas: HTMLCanvasElement | undefined;

  __updateCanvasImage() {
    if (this.hash) {
      try {
        const pixels = decode(this.hash, this.resolutionX, this.resolutionY);

        // Set the pixels to the canvas
        const imageData = new ImageData(
          pixels,
          this.resolutionX,
          this.resolutionY
        );

        const canvasEl = this.canvas;
        if (canvasEl) {
          const ctx = canvasEl.getContext('2d');
          if (ctx) {
            ctx.putImageData(imageData, 0, 0);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  firstUpdated() {
    this.__updateCanvasImage();
  }

  updated(changedProperties: Map<string, string>) {
    if (
      changedProperties.get('hash') ||
      changedProperties.get('resolutionX') ||
      changedProperties.get('resolutionY')
    ) {
      this.__updateCanvasImage();
    }
  }

  render() {
    return html`
      <div class="wrapper">
        <canvas
          id="canvas"
          width="${this.resolutionX}"
          height="${this.resolutionY}"
        ></canvas>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'blurhash-img': BlurhashImg;
  }
}
