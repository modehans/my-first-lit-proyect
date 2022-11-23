import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
      h2 {
        color: purple;
      }
    `,
  ];

  static properties = {
    counter: {
      type: Number,
    },
  };

  constructor() {
    super();
    this.counter = 0;
  }

  render() {
    return html`<slot></slot>
      <p>Parace que esto funciona bien ${this.counter}</p>
      <button @click=${this.decrement}>-1</button>
      <button @click=${this.increment}>+1</button>`;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
customElements.define('eit-counter', EitCounter);
