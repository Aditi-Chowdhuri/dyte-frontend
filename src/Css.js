import React from 'react';
import './App.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

function onChange(newValue) {
    console.log("change", newValue);
}

class Css extends React.Component {
    render() {
        return (
            <div className="App">
                <AceEditor
                    placeholder="CSS"
                    mode="css"
                    theme="monokai"
                    name="blah2"
                    onLoad={this.onLoad}
                    onChange={onChange}
                    fontSize={16}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={``}
                    setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                    }}
                />  
            </div>   
        );
    } 
}

export default Css;