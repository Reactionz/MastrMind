import React, { useState } from 'react';
import { EditorState } from 'draft.js';
import { ContentState, Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

const App = () => 
{
  let _contentState = ContentState.createFromText('Sample');
  const raw = convertToRaw(_contentState)
  const [ContentState, setContentState] = useState(raw)
  return (
    <div className="App">
      <header className="App-header">
        Notes
      </header>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        defaultContentState={ContentState}
        onContentStateChange={setContentState}
      />
    </div>
  )
}

export default App;