import React, { Component } from 'react';
import './Back.css';

export default class Back extends Component {
  clickBack = () => {
    this.props.backHandler();
  };
  render() {
    return (
      <td id="back" onClick={this.clickBack}>
        {this.props.value}
      </td>
    );
  }
}