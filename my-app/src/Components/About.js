import React,{useState} from "react";

export default function About(props) {
    // const [myStyle,setStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle={
        color: props.mode==='dark'?'white':'grey',
        backgroundColor: props.mode==='dark'?'grey':'white'
    }
    // const [btntext,setBtntext]=useState("Enable Dark Mode");
    // const toogleStyle=()=>{
    //     if(myStyle.color==='white'){
    //         let style=({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setStyle(style);
    //         let text='Enable Dark Mode';
    //         setBtntext(text);
    //     }
    //     else{
    //         let style=({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setStyle(style);
    //         let text='Enable Light Mode';
    //         setBtntext(text);
    //     }
    // }

  return (
    <div>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="button">
      <button className="btn btn-primary my-3" onClick={toogleStyle}>{btntext}</button>
      </div> */}
    </div>
  );
}
