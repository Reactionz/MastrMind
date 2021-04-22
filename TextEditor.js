import React, {Component} from 'react';
import {render} from 'react-dom';
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";  //include css line per github formatting issue
import './App.css';

class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty(), };
    }

    onEditorStateChange: Function = (editorState) => {
        this.setState({editorState, });
    };

    render() {
        const {editorState} = this.state;
        return <div className ='editor'>
            <Editor
                editorState={editorState}
                onEditorStateChange={this.onEditorStateChange}
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                toolbar={{
                    inline: {inDropdown: true},
                    list: {inDropdown: true},
                    textAlign: {inDropdown: true},
                    link: {inDropdown: true},
                    history: {inDropdown: true}
                }}
            />
        </div>
    }
}

export default TextEditor;