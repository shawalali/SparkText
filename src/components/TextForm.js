import React, {useState} from 'react'


export default function TextForm(props) {
    
    const [text, setText] = useState('')
   
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () =>{
        let newText = ('');
        setText(newText);
    }

    const handleCopy = () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    
    return (
        <>
        <div className="container" style= {{color:props.mode==='dark'?'white':'black'}}>
         <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'#042743':'white',  color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            </div> 
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>
        </div>
        <div className="container my-3" style= {{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
