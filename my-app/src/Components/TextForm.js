import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your Text Here");
  const handleUpClick = () => {
    // console.log("button was clicked ");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","Sucess");
  };
  const handlelpClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","Sucess");
  };
  const handlelToClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared !!","Sucess");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extraspace Removed !!","Sucess");
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-1"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handlelpClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handlelToClear}>
            Clear Text
          </button>
          <button
            className="btn btn-primary dropdown-toggle mx-1 my-1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Font to change
          </button>
          <ul class="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
        </div>
      </div>

      <div className="container" my-3 style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview it here"}</p>
      </div>
    </>
  );
}
