import React, { Component } from 'react';
import './Calculator.css';
import CalOut  from "../CalOut/CalOut";
import CalIn   from "../CalIn/CalIn";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processValue: "",
      resultValue: "",
      copyShowValue: "",
      copyShowDisValue: ""
    };
  }
  numHandler = (number) => {
    this.setState({
      copyShowValue: "",
      copyShowDisValue: ""
    })
    let { processValue, resultValue } = this.state;
    if (processValue == "0") {
      this.setState({
        processValue: number == 0 ? 0 : number
      }, function () {
        this.input.value = this.state.processValue
      });
    } else {
      this.setState({
        processValue: processValue + number
      }, function () {
        this.input.value = this.state.processValue
      });


      if (/\+|\-|×|÷|%/g.test(processValue + number)) {
        this.setState({
          resultValue: eval(
            (processValue + number).replace(/×|÷|%/g, function (ope) {
              var opeMapping = {
                "×": "*",
                "÷": "/",
                "%": "/100"
              };
              return opeMapping[ope];
            })
          )
        });
      } else {
        this.setState({
          resultValue: ""
        });
      }
    }
  };

  clearHandler = () => {
    this.setState({
      copyShowValue: "",
      copyShowDisValue: ""
    })
    let { processValue, resultValue } = this.state;
    this.setState({
      processValue: "",
      resultValue: ""
    }, function () {
      this.input.value = this.state.processValue
    });
  };

  backHandler = () => {
    let { processValue, resultValue } = this.state;
    if (this.state.copyShowValue !== "") {
      if (processValue == "") {
        processValue = this.state.copyShowValue;
      }
      this.setState({
        copyShowValue: "",
        copyShowDisValue: ""
      })
    }
    if (processValue !== "") {
      let lastValue = processValue[processValue.length - 1]
      this.setState({
        processValue: processValue.substr(0, processValue.length - 1)
      }, function () {
        this.input.value = this.state.processValue
      });
      var arr = processValue.match(/\+|\-|×|÷/g);
      if (arr !== null) {
        if (arr.length > 1) {
          if (/[\d%]$/.test(processValue)) {
            this.setState({
              resultValue: eval(processValue)
            });
          } else {
            this.setState({
              resultValue: eval(processValue.slice(0, processValue.length - 1))
            });
          }
        } else if (arr.length == 1) {
          if (Number(lastValue)) {
            this.setState({
              resultValue: eval(processValue)
            });
          } else {
            this.setState({
              resultValue: ""
            });
          }
        }
      }
      else if (arr == null) {
        this.setState({
          resultValue: ""
        });
      }
    }
  };

  operatorHandler = type => {
    let { processValue, resultValue } = this.state;
    if (this.state.copyShowValue !== "") {
      if (processValue == "") {
        processValue = this.state.copyShowValue;
      }
      this.setState({
        copyShowValue: "",
        copyShowDisValue: ""
      })
    }
    if (processValue !== "") {
      let lastValue = processValue[processValue.length - 1]
      if (/[\d%\.]$/.test(processValue)) {
        this.setState({
          processValue: processValue + type
        }, function () {
          this.input.value = this.state.processValue
        });
      } else if (/[\+×÷]$/.test(processValue)) {
        if (type == "-") {
          if (lastValue == "+") {
            this.setState({
              processValue: processValue
                .slice(0, processValue.length - 1)
                .concat(type)
            }, function () {
              this.input.value = this.state.processValue
            });
          } else if (/[×÷]$/.test(processValue)) {
            this.setState({
              processValue: processValue + type
            }, function () {
              this.input.value = this.state.processValue
            });
          }
        } else if (type !== "-") {
          if (type !== lastValue) {
            this.setState({
              processValue: processValue
                .slice(0, processValue.length - 1)
                .concat(type)
            }, function () {
              this.input.value = this.state.processValue
            });
          }
        }
      } else if (lastValue == "-") {
        if (type !== "-") {
          if (/[×÷]\-$/.test(processValue)) {
            this.setState({
              processValue: processValue
                .slice(0, processValue.length - 2)
                .concat(type)
            }, function () {
              this.input.value = this.state.processValue
            });
          } else if (/[\d%\.]\-$/.test(processValue)) {
            this.setState({
              processValue: processValue
                .slice(0, processValue.length - 1)
                .concat(type)
            }, function () {
              this.input.value = this.state.processValue
            });
          }
        }
      }
    }
  };

  percentageHandler = () => {
    let { processValue, resultValue } = this.state;
    if (this.state.copyShowValue !== "") {
      if (processValue == "") {
        processValue = this.state.copyShowValue;
      }
      this.setState({
        copyShowValue: "",
        copyShowDisValue: ""
      })
    }
    let lastValue = processValue[processValue.length - 1]
    if (processValue !== 0 && Number(lastValue)) {
      this.setState({
        processValue: processValue + "%",
        resultValue: eval(
          (processValue + "%").replace(/×|÷|%/g, function (ope) {
            var opeMapping = {
              "×": "*",
              "÷": "/",
              "%": "/100"
            };
            return opeMapping[ope];
          })
        )
      }, function () {
        this.input.value = this.state.processValue
      });
    }
  };

  dotHandler = () => {
    this.setState({
      copyShowValue: "",
      copyShowDisValue: ""
    })
    let { processValue, resultValue } = this.state;
    let numArry = processValue.match(/\d+\.?(\d+)*/g);
    if (!numArry[numArry.length - 1].includes(".")) {
      this.setState({
        processValue: processValue + "."
      }, function () {
        this.input.value = this.state.processValue
      });
    }
  };

  equalHandler = () => {
    let { processValue, resultValue } = this.state;
    const copyResultValue = (resultValue !== "" ? resultValue : parseFloat(processValue)).toString();
    const copyProcessValue = this.input.value;

    this.setState({
      processValue: "",
      resultValue: "",
      copyShowValue: copyResultValue,
      copyShowDisValue: copyProcessValue
    }, function () {
      this.input.value = this.state.processValue
    });
  }  
  render() {
    return (
      <div id="calculator">
        <CalOut
          processValue={this.state.processValue}
          initRef={input => (this.input = input)}
          result={this.state.resultValue}
          copyShowValue={this.state.copyShowValue}
          copyShowDisValue={this.state.copyShowDisValue}
        />
        <CalIn
          numHandler={this.numHandler}
          clearHandler={this.clearHandler}
          backHandler={this.backHandler}
          operatorHandler={this.operatorHandler}
          percentageHandler={this.percentageHandler}
          dotHandler={this.dotHandler} equalHandler={this.equalHandler}
        />
      </div>
    );
  }
}


