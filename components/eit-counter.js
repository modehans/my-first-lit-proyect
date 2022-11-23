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
    return html`<h2>Mi contador</h2>
      <p>Parace que esto funciona bien ${this.counter}</p>`;
  }
}
customElements.define('eit-counter', EitCounter);
