import React, { Component } from 'react';
import './CalOut.css';

export default class CalOut extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copyShow: null,
      copyShowDis: null
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.copyShowDisValue !== nextProps.copyShowDisValue) {
      if (nextProps.copyShowDisValue !== "") {
        const copyShow = React.cloneElement(
          <input />,
          {
            className: "copy-show",
            defaultValue: nextProps.copyShowValue,
            ref: null
          }
        )

        const copyShowDis = React.cloneElement(
          <input />,
          {
            className: "copy-showdis",
            defaultValue: nextProps.copyShowDisValue,
            ref: null
          }
        )
        this.setState({
          copyShow,
          copyShowDis
        })
      } else {
        this.setState({
          copyShow: null,
          copyShowDis: null
        })
      }
    }
  }

  render() {
    return (
      <div id="cal-out">
        <p />
        <div id="focus">
          <input id="show" type="text" ref={this.props.initRef} autoFocus />
        </div>
        <p id="result">{this.props.result}</p>
        {this.state.copyShow}
        {this.state.copyShowDis}
      </div>
    );
  }
}