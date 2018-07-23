import React, { Component } from 'react';
import './CalIn.css';
import  Clear from "../Clear/Clear";
import  Operator   from "../Operator/Operator";
import  Back   from "../Back/Back";
import  NumPad   from "../NumPad/NumPad";
import  Percentage   from "../Percentage/Percentage";
import  Equal   from "../Equal/Equal";
import  Dot   from "../Dot/Dot";

export default class CalIn extends Component {
  render() {
    return (
      <div id="cal-in">
        <table>
          <tbody>
            <tr>
              <Clear value="C" clearHandler={this.props.clearHandler} />
              <Operator type="÷" operatorHandler={this.props.operatorHandler} />
              <Operator type="×" operatorHandler={this.props.operatorHandler} />
              <Back value="" backHandler={this.props.backHandler} />
            </tr>
            <tr>
              {[7, 8, 9].map((i, index) => (
                <NumPad
                  key={index}
                  number={i.toString()}
                  numHandler={this.props.numHandler}
                />
              ))}
              <Operator type="-" operatorHandler={this.props.operatorHandler} />
            </tr>
            <tr>
              {[4, 5, 6].map((i, index) => (
                <NumPad
                  key={index}
                  number={i.toString()}
                  numHandler={this.props.numHandler}
                />
              ))}
              <Operator type="+" operatorHandler={this.props.operatorHandler} />
            </tr>
            <tr>
              {[1, 2, 3].map((i, index) => (
                <NumPad
                  key={index}
                  number={i.toString()}
                  numHandler={this.props.numHandler}
                />
              ))}
              <Equal value="=" equalHandler={this.props.equalHandler}/>
            </tr>
            <tr>
              <Percentage
                value="%"
                percentageHandler={this.props.percentageHandler}
              />
              <NumPad number="0" numHandler={this.props.numHandler} />
              <Dot value="." dotHandler={this.props.dotHandler} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
