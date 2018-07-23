import React, { Component } from 'react';

export default class Dot extends Component {
  clickDot = () => {
    this.props.dotHandler();
  };
  render() {
    return (
      <td id="point" onClick={this.clickDot}>
        {this.props.value}
      </td>
    );
  }
}