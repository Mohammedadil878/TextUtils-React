import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", 'success');
  }

  const handleLoClick = () => {
    // console.log("Lowercase was Clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", 'success');
  }

  const handleSplCharClick = () => {
    // console.log("Lowercase was Clicked"+ text);
    let newText = text.replace(/[^a-zA-Z0-9]/g, ' ');
    setText(newText)
    props.showAlert("Removed all the Special Characters", 'success');
  }

  const handleExtraWhiteSpace = () => {
    // console.log("Lowercase was Clicked"+ text);
    // let newText = text.replace(/\s+/g, ' ').trim();
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed all the White Spaces", 'success');
  }

  const handleCopy = () => {
    // console.log("Lowercase was Clicked"+ text);
    // let newText = document.getElementById('myBox');
    // newText.select(); 
    // navigator.clipboard.writeText(newText.value);
    navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges()
    props.showAlert("Copied to Clipboard", 'success');
  }
 
  const handleClearClick = () => {
    // console.log("Lowercase was Clicked"+ text);  
    let newText = ""
    setText(newText)
    props.showAlert("Cleared the Textarea", 'success');
  } 

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  //   text = "new text"; // wrong way to change the state
  //   setText('new text'); // correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="15"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleSplCharClick}>Remove Special Characters</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraWhiteSpace}>Remove Extra White Space</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 } ).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
