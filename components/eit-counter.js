import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        padding: 1rem;
        font-family: verdana;
      }
      p {
        color: purple;
        font-size: 1.5rem;
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
      <p>${this.counter}</p>
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
