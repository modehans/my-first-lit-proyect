import { LitElement, html, css } from 'lit';

export class NameTag extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        gap: 1rem;
        padding: 2rem;
      }
    `,
  ];
  static properties = {
    name: { type: String },
  };
  constructor() {
    super();
    this.name = 'Your name here';
  }

  changeName(ev) {
    this.name = ev.target.value;
  }

  handleClick() {
    alert(`¿Qué hay de nuevo ${this.name}?`);
  }

  render() {
    // TODO: Add declarative event listener to input.
    return html`
      <p>Hello, ${this.name}</p>
      <input @input=${this.changeName} placeholder="Enter your name" />
      <button @click=${this.handleClick}>Click me!</button>
    `;
  }
}
customElements.define('name-tag', NameTag);
