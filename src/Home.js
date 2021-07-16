import React from 'react';
import './App.css';

class Home extends React.Component {
    
    render() {
        return (
            <div className="App">
                <h1>Welcome</h1>
            </div>
        );
    }
}

export default Home;
/* import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

function onChange(newValue) {
    console.log("change", newValue);
}

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <div class="float-container">
                    <div class="float-child">
                        <AceEditor
                            placeholder="HTML"
                            mode="html"
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
                
                    <div class="float-child">
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
                
                    <div class="float-child">
                        <AceEditor
                            placeholder="JS"
                            mode="javascript"
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
                </div>  
            </div>   
        );
    } 
}

export default Home; */