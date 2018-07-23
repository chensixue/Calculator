import React, { Component } from 'react';

export default class Operator extends Component {
  clickOperator = () => {
    this.props.operatorHandler(this.props.type);
  };
  render() {
    return (
      <td className="operator" onClick={this.clickOperator}>
        {this.props.type}
      </td>
    );
  }
}