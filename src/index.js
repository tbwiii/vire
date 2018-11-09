import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import Current from "./components/Current";
import Actors from "./data/actors";
import Movies from "./data/movies";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      roundList: Movies.concat(Actors).sort(function() {
        return 0.5 - Math.random();
      }),
      roundCount: 0
    };
  }

  handleNewRound() {
    this.setState({
      roundCount: this.state.roundCount + 1
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">The Movie Game</h1>

        <Menu onNewRound={this.handleNewRound.bind(this)} />

        <Current current={this.state.roundList[this.state.roundCount]} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
