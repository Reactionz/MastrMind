import React, {Component, useState} from 'react';
import {HuePicker} from 'react-color';
import TextEditor from './TextEditor';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [color, setColor] = useState('#1d56f0');

  return (
    <div>
      <HuePicker
        color={color}
        //height = '0px'
        width = 'cover' //huepicker taking up the top of the screen is more fun than a hidden bar or button
        onChangeComplete = { (color) => {setColor(color.hex)} } 
      />

      <div style = {{
        alignItems: 'center',
        backgroundColor: color,
        height:'100px',
        padding: '40px',
        border: 'none',
      }} >
        <header><h1> Journal </h1></header>
      </div>

      <TextEditor />

    </div>
  );
}
