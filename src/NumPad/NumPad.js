import React, { Component } from 'react';

export default class NumPad extends Component {
  clickNum = () => {
    this.props.numHandler(this.props.number);
  };
  render() {
    return (
      <td className="num" onClick={this.clickNum}>
        {this.props.number}
      </td>
    );
  }
}