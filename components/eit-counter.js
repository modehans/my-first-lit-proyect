import { LitElement, html, css } from 'lit';
import {
  WiredButton,
  WiredCard,
  WiredInput,
  WiredSlider,
} from 'wired-elements';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        padding: 1rem;
        font-family: verdana;
        color: purple;
      }
      .parrafo {
        font-size: 1.5rem;
      }
      wired-input {
        width: 80px;
        font-size: 1.5rem;
        padding: 0.5rem;
      }
      wired-button.decrement {
        background-color: #ce4257;
      }
      wired-button {
        background-color: plum;
      }
      wired-slider {
        --wired-slider-knob-color: plum;
        --wired-slider-bar-color: purple;
      }
    `,
  ];

  static properties = {
    counter: {
      type: Number,
      reflect: true,
    },
    quantity: { type: Number },
  };

  constructor() {
    super();
    this.counter = 0;
    this.quantity = 10;
  }

  render() {
    return html`
      <wired-card elevation="3">
        <slot></slot>
        <p class="parrafo">${this.counter}</p>
        <p>
          <wired-input id="quantity" type="number" .value=${this.quantity}>
            ></wired-input
          >
        </p>
        <wired-slider
          value="10"
          min="0"
          max="20"
          @change=${this.doChangeQuantity}
        ></wired-slider>
        <wired-button class="decrement" @click=${this.decrement}>
          Decrementar
        </wired-button>
        <wired-button @click=${this.increment}>Incrementar</wired-button>
      </wired-card>
    `;
  }

  /*  get quantity() {
    return this.shadowRoot.getElementById('quantity').value;
  } */

  doChangeQuantity(e) {
    this.quantity = e.detail.value;
  }

  increment() {
    this.counter += parseInt(this.quantity);
  }

  decrement() {
    this.counter -= parseInt(this.quantity);
  }
}
customElements.define('eit-counter', EitCounter);
