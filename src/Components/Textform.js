import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("upper case is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
       // props.showAlert("converted to upper case", "success");
    }
    const handleLoClick = ()=>{
        // console.log("upper case is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopyClick=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleCapitalClick = () => {
        const words = text.split(' ');
    
        // Capitalize the first letter of each word
        const capitalizedWords = words.map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
    
        // Join the words back into a sentence
        const capitalizedText = capitalizedWords.join(' ');
    
        // Set the modified text using setText
        setText(capitalizedText);
      }
    const handleClearClick = ()=>{
        // console.log("upper case is clicked" + text);
        let word = '';
        setText(word);
        // showAlert("text clear", "success");
    }

    // const handleRempveSpaceClick =()=>{
    //     let newText  = text.split(/[]+/);
    //     setText(newText.join(" "));
    // }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
        // setText('correct way');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Captalize Word</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleRempveSpaceClick}>Remove space</button> */}
    </div>

    <div className="container">
        <h1>your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    );
}
