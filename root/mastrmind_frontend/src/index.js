import React, {Component} from 'react';
import ReactDOM from "react-dom"
import App from "./App"
import mongoose from 'mongodb';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector('#root')
);
