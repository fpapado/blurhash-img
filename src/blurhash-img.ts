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
   * Images keep their aspect ratio after they are replaced.
   * To make the layout of this component analogous, we use an
   * --aspect-ratio CSS Custom Property.
   */
  static styles = css`
    :host {
      display: block;
      max-width: 100%;
    }

    .wrapper {
      position: relative;
      height: 0;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
    }

    canvas {
      position: absolute;
      inset: 0px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
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
