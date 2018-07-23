import React, { Component } from 'react';

export default class Clear extends Component {
  clickClear = () => {
    this.props.clearHandler();
  };
  render() {
    return (
      <td id="clear" onClick={this.clickClear}>
        {this.props.value}
      </td>
    );
  }
}