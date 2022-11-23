import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
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
      <button @click=${this.increment}>+1</button>`;
  }

  increment() {
    this.counter++;
  }
}
customElements.define('eit-counter', EitCounter);
