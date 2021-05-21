import React, {Component, useState} from 'react';

import {render} from 'react-dom';
import { EditorState, convertToRaw, convertFromRaw} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import {HuePicker} from 'react-color';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './App.css';


//RawDraftContentState allows data to be saved in a database so we can save our journal entries
const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

// Refactored Adara's Code to a functional component.

// class TextEditor extends Component {
//     constructor(props) {
//         super(props);

//         const contentState = convertFromRaw(content);
//         this.state = {contentState};
//     }

//     onEditorStateChange: Function = (contentState) => {
//         this.setState({contentState, });
//     };

//     const handleSave = async (e) => {
//         const editorJSON = JSON.stringify(convertToRaw(EditorState.getContents()));

//     };

//     render() {
//         const {contentState} = this.state;
//         return <div className ='editor'>
//             <Editor
//                 editorStyle = {{
//                     padding: '10px',
//                 }}
//                 onContentStateChange = {this.oncontentStateChange}
//                 wrapperStyle = {{
//                     width: "cover",
//                     alignItems: "center",
//                     //padding: '10px', save for editor only
//                 }}
//                 wrapperClassName = "wrapper-class"
//                 editorClassName = "editor-class"
//                 toolbarClassName = "toolbar-class"
//                 toolbarStyle = {{border: "2px solid black"}}
//                 toolbar = {{
//                     //inline: {inDropdown: true},      looks nicer and fills the screen more
//                     //block: {inDropdown: true},       w/o these in a dropdown menu
//                     list: {inDropdown: true},
//                     textAlign: {inDropdown: true},
//                     link: {inDropdown: true},
//                     history: {inDropdown: true},
//                     colorPicker: {inDropdown: true},
//                 }}
//             />

            

//         </div>
//     }
// }

function TextEditor(props) {
    const [contentState, setContentState] = useState(convertFromRaw(content));

    // const contentState = convertFromRaw(content);

    const onContentStateChange = () => {
        setContentState(contentState)
    }
  


    return (
    <div className ='editor'>
        <Editor
            editorStyle = {{
                padding: '10px',
            }}
            onContentStateChange = {onContentStateChange}
            wrapperStyle = {{
                width: "cover",
                alignItems: "center",
                //padding: '10px', save for editor only
            }}
            wrapperClassName = "wrapper-class"
            editorClassName = "editor-class"
            toolbarClassName = "toolbar-class"
            toolbarStyle = {{border: "2px solid black"}}
            toolbar = {{
                //inline: {inDropdown: true},      looks nicer and fills the screen more
                //block: {inDropdown: true},       w/o these in a dropdown menu
                list: {inDropdown: true},
                textAlign: {inDropdown: true},
                link: {inDropdown: true},
                history: {inDropdown: true},
                colorPicker: {inDropdown: true},
            }
        }
    />



    </div>
    )
}

export default TextEditor;