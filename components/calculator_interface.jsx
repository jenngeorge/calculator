import React from 'react';
import Results from './results_container';

class CalculatorInterface extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      current: "",
      note: "",
      error: false
    };
  };

  sendValToCalculator(val){
    this.setState({current:this.state.current + val.toString(), error: false});
  }

  addElement(el){
    if (el === "="){
      this.setState({current: this.doMath(this.state.current)});
    } else if (el === "x"){
      this.setState({current: this.state.current + "*", error: false});
    } else {
      this.setState({current: this.state.current + el, error: false});
    }
  };

  doMath(elementString){
    let total;
    try {
      total = eval(this.state.current);
    } catch (e){
      this.setState({error: e.message});
    }

    return total !== undefined ? total : this.state.current;
  }

  clearWindow(){
    this.setState({current: "", error: false})
  }

  saveTotal(){
    const total = this.doMath(this.state.current);
    const uniqueId = new Date().getTime();
    this.setState({current: total}, () => {
      this.props.receiveResult({val: total, note: this.state.note}, uniqueId);
    });
  }

  noteChange(e){
    this.setState({note: e.target.value});
  }


  render() {
    const that = this;
    const buttonStrings = ['7', '8', '9',  '+', '4', '5', '6', '-',
                            '1', '2', '3', '/', '0', '.', '=', 'x']
    const buttonLis = buttonStrings.map(el => (
      <li key={el} className="calc-button" onClick={that.addElement.bind(that, el)}>{el}</li>
    ));

    let errorDiv;
    if (this.state.error) {
      errorDiv = (
      <div className="error-message">
        {this.state.error}
      </div>);
    }


    return (
      <section className="calculator-container">
        < Results sendValToCalculator={this.sendValToCalculator.bind(this)} />
        <section className="calculator-inner">
          {errorDiv}
          <div className="calculator-top">
            <label className="note-input">
              Note:
              <input type="text" value={this.state.note}
                onChange={this.noteChange.bind(this)} />
            </label>
            <div className="calculator-window">
              {this.state.current}
            </div>
            <button className="clear-window" onClick={this.clearWindow.bind(this)}>
              Clear
            </button>
            <button className="save-total" onClick={this.saveTotal.bind(this)}>
              Save
            </button>
          </div>
          <ul className="calculator-buttons">
            {buttonLis}
          </ul>
        </section>
      </section>
    )

  };
}

export default CalculatorInterface;
