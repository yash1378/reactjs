import React, { useState } from "react";
// import App from './components/App';
export default function TextForm(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  //   I made this text reverser in accpetance of the challenge given by harry in VIDEO 9
  const handlereverse = () => {
    let newtext = " ";
    for (let i = 0; i < text.length; i++) {
      newtext += text[text.length - i - 1];
    }
    setText(newtext);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        {/* now this double bracketis beacuse once for making it take input of js and inner {}because that's how only an object is written */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="mybox" class="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",color:props.mode==="light"?"black":"white"
            }}
          ></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>
          Convert to Uppercase
        </button>

        <span> </span>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>
          Convert to Lowercase
        </button>

        <span></span>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlereverse}>
          Reverse the String
        </button>
        {/* the disabled function is used to remove the functionality of button when the textlength=0 */}
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Info about text</h1>
        <p>
          Words:- {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and characters:- {text.length}
        </p>
        <p>
          Time required to read whole text :- {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
      </div>
      {/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */}
    </>
  );
}
