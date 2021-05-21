import React, {Component, useState} from 'react';
import {HuePicker} from 'react-color';
import TextEditor from './TextEditor';
// import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import { EditorState, convertToRaw, convertFromRaw} from "draft-js";
import axios from 'axios'

let journalId = 0;
export default function App() {
  let content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

  const [color, setColor] = useState('#1d56f0');
  const [contentState, setContentState] = useState(convertFromRaw(content));
  
  const onContentStateChange = () => {
      setContentState(contentState)
  }

  const getJournal = async (e) => {
      e.preventDefault();
      try {
        // const data = {journal};
        console.log(`getting journal `);
        const state = await axios.get(`http://localhost:3001/journal/getJournal/${journalId}`);
        setContentState(state);
        // display something when saved
      } catch(err) {
        console.error(err);
      }
  }

  const saveJournal = async (e) => {
    // const newJournal = { journalTitle, journalEntry, journalColor }
    e.preventDefault();
    try {
      console.log('saving journal');
      // const journal = await axios.post(`http://localhost:3001/journal/saveJournal`,newJournal);
      console.log("journal saved!");
      // console.log(journal)
    } catch (err) {

    }
  }
  console.log(color);

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

      <TextEditor contentState = {content} />
      <Button color = "primary" onClick = {saveJournal} value = ""> Save Journal </Button>

    </div>
  );
}
