import React, {Component} from 'react';
import BackgroundColor from './Background';
import TextEditor from './TextEditor';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header><h1> Journal </h1></header>
        <TextEditor />
      </div>
    );
  }
}

export default App;
