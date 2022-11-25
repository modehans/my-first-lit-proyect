import { LitElement, html, css } from 'lit';

export class TodoList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .completed {
        text-decoration-line: line-through;
        color: #777;
      }
    `,
  ];

  static properties = {
    _listItems: { state: true },
    input: { type: String },
  };

  constructor() {
    super();
    this._listItems = [
      { text: 'Start Lit tutorial', completed: true },
      { text: 'Make to-do list', completed: false },
    ];
    this.input = '';
  }

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
        ${this._listItems.map((item) => {
          return html` <li
            class=${item.completed ? 'completed' : ''}
            @click=${this.toggleCompleted}
          >
            ${item.text}${item.completed ? ' ✅' : ' 👀'}
          </li>`;
        })}
      </ul>
      <input
        @input=${this.handleChange}
        id="newitem"
        aria-label="New item"
        .value=${this.input}
      />
      <button @click=${this.addToDo}>Add</button>
    `;
  }

  // TODO: Add click handler.
  handleChange(ev) {
    this.input = ev.target.value;
  }

  addToDo() {
    this._listItems = [
      ...this._listItems,
      { text: this.input, completed: false },
    ];
    this.input = '';
    //al usar el spread operator, se detecta el cambio y no es necesario hacer this.requestUpdate()
  }
}

customElements.define('todo-list', TodoList);
