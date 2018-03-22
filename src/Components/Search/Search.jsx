import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onClick() {
    console.log('I should scrape the information!', this.state.value);
  }

  render() {
    return (
      <form className="Search">
        <input
          type="text"
          placeholder="Search"
          onChange={e => this.onChange(e)}
        />
        <input
          type="button"
          value="Go"
          onClick={() => this.onClick()}
        />
      </form>
    );
  }
}

