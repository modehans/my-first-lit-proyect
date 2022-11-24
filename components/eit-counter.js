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
        width: 50px;
        font-size: 1.5rem;
        padding: 0.5rem;
      }
      wired-button.decrement {
        background-color: #ce4257;
      }
      wired-button {
        background-color: plum;
      }
    `,
  ];

  static properties = {
    counter: {
      type: Number,
      reflect: true,
    },
  };

  constructor() {
    super();
    this.counter = 0;
  }

  render() {
    return html`
      <wired-card elevation="3">
        <slot></slot>
        <p class="parrafo">${this.counter}</p>
        <p>
          <wired-input id="quantity" type="number" value="1"> ></wired-input>
        </p>
        <wired-slider value="10" min="5" max="15"></wired-slider>
        <wired-button class="decrement" @click=${this.decrement}>
          Decrementar
        </wired-button>
        <wired-button @click=${this.increment}>Incrementar</wired-button>
      </wired-card>
    `;
  }

  get quantity() {
    return this.shadowRoot.getElementById('quantity').value;
  }

  increment() {
    this.counter += parseInt(this.quantity);
  }

  decrement() {
    this.counter -= parseInt(this.quantity);
  }
}
customElements.define('eit-counter', EitCounter);
