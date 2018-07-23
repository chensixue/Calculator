import React, { Component } from 'react';

export default class Percentage extends Component {
  clickPercentage = () => {
    this.props.percentageHandler();
  };
  render() {
    return (
      <td id="percent" onClick={this.clickPercentage}>
        {this.props.value}
      </td>
    );
  }
}