import React, { Component } from 'react';
import './Equal.css';

export default class Equal extends Component {
  clickEqual=()=>{
    this.props.equalHandler()
  }
  render() {
    return (
      <td id="equal" rowSpan="2" onClick={this.clickEqual}>
        {this.props.value}
      </td>
    );
  }
}