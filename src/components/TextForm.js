import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("");
const handleClick = ()=>{
//console.log("you clicked");
let newtext = text.toUpperCase();
setText(newtext);
}

const handleChange = (event)=>{
   // console.log("you changed text");
setText(event.target.value);
}

const handleLoClick = ()=>{
   // console.log("you clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    }


  return (
    <div className='my-2'>
        <h1>{props.heading}</h1>
 <div className="mb-3">
  <textarea className="form-control" value={text} id="Textarea1" rows="8" onChange={handleChange}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleClick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
<div className="container my-2"><h2>Your text summary</h2><p>{text.split(" ").length} words and {text.length} characters</p><p>{0.008*text.split(" ").length} Minutes to read</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
    
    </div>
  )
}
