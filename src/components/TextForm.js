import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    
    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    
    const handleCleartext = ()=>{
        // console.log("Clear text" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Clear text", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        // console.log("Clear text" + text);
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = ()=>{
        // console.log("Clear text" + text);
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText = ("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCleartext}>Clear Text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Extra space</button>
        </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Nothihg to preview!"}</p>
        </div>
        </>
    )
}
