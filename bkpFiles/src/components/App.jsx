import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  valueSubmit = e => {
    e.preventDefault();
    console.log(`Add ${this.state.name}`);
    this.props.newContact({ ...this.state });
    this.reset();
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.inputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <div>
          <h2>Contacts</h2>
          <ul>
            <li></li>
          </ul>
        </div>
      </>
    );
  }
}
