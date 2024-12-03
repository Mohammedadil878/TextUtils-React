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
      let newText = document.getElementById('myBox');
      newText.select();
      navigator.clipboard.writeText(newText.value);
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
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="15"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleSplCharClick}>Remove Special Characters</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraWhiteSpace}>Remove Extra White Space</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0? text : "Enter something it the text box above to preview it here."}</p>
      </div>
    </>
  );
}
