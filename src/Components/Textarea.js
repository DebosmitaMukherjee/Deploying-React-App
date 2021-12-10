import React, { useState } from "react";

export default function Textarea(props) {
  const setUpCase = () => {
    console.log("Upper case is clicked");
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const setLowCase = () => {
    console.log("Upper case is clicked");
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const clear = () => {
    console.log("Upper case is clicked");
    let newtext = "";
    settext(newtext);
  };
  const earseSpace = () => {
    console.log("Upper case is clicked");
    let newtext = text.split(" ").join("");
    settext(newtext);
  };
  const copy = () => {
    let newtext = document.getElementById("myBox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
  };
  const changed = (event) => {
    console.log("Changed!!");
    settext(event.target.value);
  };
  const [text, settext] = useState("");
  return (
    <>
      <div
        class={`form-group text-${props.mode === "light" ? "dark" : "light"}`}
      >
        <h3>{props.heading}</h3>
        <textarea
          class={`form-control text-${props.mode==='light'?'dark':'light'}`}
          id="myBox"
          rows="8"
          value={text}
          onChange={changed}
          style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
        ></textarea>
        <div className="buttons my-3">
          <button className="primaryUppercase" onClick={setUpCase}>
            Convert to Uppercase
          </button>
          <button className="primaryLowercase mx-2" onClick={setLowCase}>
            Convert to Lowercase
          </button>
          <button className="primaryClear mx-2" onClick={clear}>
            Clear Text
          </button>
          <button className="primaryEraseSpace mx-2" onClick={earseSpace}>
            Erase space
          </button>
          <button className="primaryCopy mx-2" onClick={copy}>
            Copy Text
          </button>
        </div>

        <div className="container my-3 mx-0">
          <h3>Your text summary</h3>
          <p>
            {(text.charAt(text.length-1)===" "||text.length===0)?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters
          </p>
          <p>Time taken to read : {0.008 * text.split(" ").length}</p>
          <h3 className="preview my-2">Preview</h3>
          <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
      </div>
    </>
  );
}
