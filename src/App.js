import React from "react";
import Button from "./Button";
import { BsEgg } from "react-icons/bs";
import { BsEggFried } from "react-icons/bs";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeValue: 100,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Cook the Egg</h1>
        <h2>
          {this.state.changeValue > 0 ? this.state.changeValue : "sucess"}
        </h2>
        <div className="img">
          {this.state.changeValue > 0 ? <BsEgg /> : <BsEggFried />}
        </div>

        <div>
          {this.state.changeValue > 0 ? (
            <div>
              <div className="buttons-1">
                <Button name={`Don't touch me`} change={this._reset} />
                <Button name={`Don't touch me`} change={this._reset} />
                <Button name={`Don't touch me`} change={this._reset} />
              </div>
              <div className="buttons-2">
                <Button name={`Don't touch me`} change={this._reset} />
                <Button name={`Click me`} change={this._tab} />
                <Button name={`Don't touch me`} change={this._reset} />
              </div>
              <div className="buttons-3">
                <Button name={`Don't touch me`} change={this._reset} />
                <Button name={`Don't touch me`} change={this._reset} />
                <Button name={`Don't touch me`} change={this._reset} />
              </div>
            </div>
          ) : (
            <div className="tryAgain">
              <Button name={`try again`} change={this._tryAgain} />
            </div>
          )}
        </div>
      </div>
    );
  }
  _tab = () => {
    this.setState((prevState) => {
      return { changeValue: prevState.changeValue - 1 };
    });
  };

  _reset = () => {
    this.setState((prevState) => {
      alert("Don't Touch Me!!!!");
      return { changeValue: (prevState.changeValue = 100) };
    });
  };

  _tryAgain = () => {
    this.setState((prevState) => {
      return { changeValue: (prevState.changeValue = 100) };
    });
  };
}

export default App;
