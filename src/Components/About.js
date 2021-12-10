import React ,{useState}from "react";

export default function About() {

    const [mStyle, setMStyle] = useState({
      backgroundColor:"White",
      color:'black'
    })
    const [btnText, setBtnText] = useState("Enable dark mode")
    const toggleTheme=()=>{
      if(mStyle.color==='black'){
        setMStyle({
          backgroundColor:"black",
          color:'White',
          // border:"0.5px solid white"
        })
        setBtnText("Enable light mode");
      }
      else{
        setMStyle({
          backgroundColor:"white",
          color:'black'
        })
        setBtnText("Enable dark mode")
      }
    }
  return (
    <div style={mStyle}>
        <h2 className="my-2" >About Us</h2>
      <div classNameName="accordion accordion-flush mx-5" id="accordionFlushExample" style={mStyle}>
        <div className="accordion-item" style={mStyle}>
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={mStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            style={mStyle}
          >
            <div className="accordion-body" style={mStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mStyle}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={mStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
            style={mStyle}
          >
            <div className="accordion-body" style={mStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the second item's accordion body. Let's imagine this being filled
              with some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mStyle}>
          <h2 className="accordion-header" id="flush-headingThree" style={mStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={mStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
            style={mStyle}
          >
            <div className="accordion-body" style={mStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary mx-2 my-3" style={mStyle} onClick={toggleTheme}>{btnText}</button>
    </div>
  );
}
