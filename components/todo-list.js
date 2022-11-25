import { LitElement, html, css } from 'lit';

import { classMap } from 'lit/directives/class-map.js';

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
      .todo {
        color: purple;
      }
    `,
  ];

  static properties = {
    _listItems: { state: true },
    input: { type: String },
    hideCompleted: { type: Boolean },
  };

  constructor() {
    super();
    this._listItems = [
      { text: 'Start Lit tutorial', completed: true },
      { text: 'Make to-do list', completed: false },
    ];
    this.input = '';
    this.hideCompleted = false;
  }
  _getClassItem(item) {
    const classes = {
      completed: item.completed,
      todo: !item.completed,
    };
    return classMap(classes);
  }

  render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;
    const todos = html`
      <ul>
        ${items.map((item) => {
          return html` <li
            class=${this._getClassItem(item)}
            @click=${() => this.toggleCompleted(item)}
          >
            ${item.text}${item.completed ? ' ✅' : ' 👀'}
          </li>`;
        })}
      </ul>
    `;
    const caughtUpMessage = html` <h3>You're all caught up!</h3> `;
    const toDosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html`
      <h2>To Do</h2>
      ${toDosOrMessage}
      <input
        @input=${this.handleChange}
        id="newitem"
        aria-label="New item"
        .value=${this.input}
      />
      <button @click=${this.addToDo}>Add</button>
      <label>
        <input
          type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}
        />
        Hide completed
      </label>
    `;
  }

  setHideCompleted(ev) {
    this.hideCompleted = ev.target.checked;
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate(); //necesita this.requestUpdate ya que se modifica un valor de un obejto no el objeto en sí por lo que no es reactivo.
  }

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
