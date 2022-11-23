import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        padding: 1rem;
        font-family: verdana;
      }
      .parrafo {
        color: purple;
        font-size: 1.5rem;
      }
      input {
        width: 30px;
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
    return html`<slot></slot>
      <p class="parrafo">${this.counter}</p>
      <p>
        <input id="quantity" type="number" value="1" />
      </p>
      <button @click=${this.decrement}>-</button>
      <button @click=${this.increment}>+</button> `;
  }

  increment() {
    let quantity = this.shadowRoot.getElementById('quantity').value;
    this.counter += parseInt(quantity);
  }

  decrement() {
    let quantity = this.shadowRoot.getElementById('quantity').value;
    this.counter -= parseInt(quantity);
  }
}
customElements.define('eit-counter', EitCounter);
