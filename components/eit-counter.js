import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`<h2>Mi contador</h2>`;
  }
}
customElements.define('eit-counter', EitCounter);
