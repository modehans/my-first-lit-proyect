import { LitElement, html, css } from 'lit';

export class EnableInput extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  static properties = {
    checked: { type: Boolean },
  };

  constructor() {
    super();
    this.checked = false;
  }

  render() {
    return html`
      <div>
        <!-- TODO: Add expression to input. -->
        <input type="text" value="Hello there." ?disabled=${!this.checked} />
      </div>
      <label
        ><input type="checkbox" @change=${this.setChecked} /> Enable
        editing</label
      >
    `;
  }

  setChecked(event) {
    this.checked = event.target.checked;
  }
}
customElements.define('enable-input', EnableInput);
