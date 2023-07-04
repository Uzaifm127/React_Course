// const React = require("react");
// const ReactDOM = require("react-dom");
/*
import React from "react";
import ReactDOM from "react-dom"; // This is because of babel JavaScript compiler
*/
// Q => Think why we import React and ReactDOM module in JavaScript?

// * we can insert HTML through JavaScript using two methods.

// Inserting HTML through JavaScript Using JSX and React
/*
ReactDOM.render(
  <>
    <h1>Uzaif With JSX</h1>
  </>,
  document.querySelector("#root")
);
*/
// After JSX compile with babel
/*

ReactDOM.render(
  React.createElement("h2", null, "Uzaif After compile"),
  document.querySelector("#root")
);
*/

// Inserting HTML using pure JavaScript
/*
let h1 = document.createElement("h1");
h1.innerHTML = "Pure JavaScript";
document.querySelector("#root").appendChild(h1);
*/

// We can also render multiple element in ReactDOM.render() if react version is above 16.xx.xx
/*
ReactDOM.render([
  <h1>Hello I am Uzaif</h1>,
  <header>This is a Header</header>,
  <nav>This is a nav Tag</nav>,
], document.querySelector(#root));
*/

// render multiple elements using React fragment
// Avoid using div but use React.Fragment instead of div as div means extra node in root
// For React version 16.2 + we don't need to write React.Fragment we directly write <> (JSX Fragment)
/*
ReactDOM.render(
  <React.Fragment>
    <h1>Hello</h1>
    <header>
      <nav>This is navbar</nav>
    </header>
  </React.Fragment>,
  document.querySelector("#root")
);
*/

// React JS Challenge #1
/*
ReactDOM.render(
  <>
    <h1>JS Challenge #1</h1>
    <p>My Favourite Netflix Series List of 5 Best series</p>
    <ol>
      <li>Jamtara</li>
      <li>All of us are dead</li>
      <li>Kota Factory</li>
      <li>Pta nhi</li>
      <li>d</li>
    </ol>
  </>,
  document.querySelector("#root")
)
*/

// JavaScript Expression in JSX in React JS #10th Lecture
// JSX ke andar JavaScript {} me use ki jaati hai
// {} only contain JavaScript Expression not JS Statements
/*
const fAndLName = "Uzaif";

const ranNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

ReactDOM.render(
  <>
    <h1>My name is {fAndLName}</h1>
    <p>Sum of 2 + 3 is {2 + 3} </p>
    <h2>My Lucky Number is {ranNum(0, 50)} </h2>
  </>,
  document.querySelector("#root")
);
*/

// ES6 Template literal in JSX in React JS #11th Lecture
/*
const fname = "Uzaif";
const lname = "m127";

ReactDOM.render(
  <>
    Method 1
    <h1>
      My Name is {fname}{lname}
      <br />
      Method 2
      My Name is {fname + " " + lname}
      <br />
      Method 3
      My Name is {`${fname}${lname}`}
    </h1>
  </>,
  document.querySelector("#root")
);
*/

// React JS Challenge #2
/*
import React from "react";
import ReactDOM from "react-dom";
const dateObj = new Date();

ReactDOM.render(
  <>
    <h1>My Name is Uzaif</h1>
    <p>
      Today's Date is {dateObj.toLocaleDateString()}
    </p>
    <p>
      Current Time is {dateObj.toLocaleTimeString()}
    </p>
  </>,
  document.querySelector("#root")
);
*/

// HTML class v/s JSX class in React JS #13th Lecture
/*
import React from "react";
import ReactDOM from "react-dom";

const name = "uzaif";

ReactDOM.render(
  <React.Fragment>
    JSX attribute are called property or props in React and always use alt in img tag
    contentEditable means content editable ho sake
    Rule:1 is always write JSX attribute in camelCase
    Rule:2 is For non closing tags close them in their own means self closing tag ex. use <img /> instead of <img> as React don't support non-terminating tags React notes my own for more info
    <h1 contentEditable="true">My name is {name}</h1>
    <h1 className="Content">Hello there</h1>
  </React.Fragment>,
  document.querySelector("#root")
);
*/

// CSS styling and importing css files in React JS #14 Lecture

// Class Keyword is reserved in React JS as class based components that's why we use className in JSX.
// React ki yahi khasiyat hai ki hame html me css and js link karne ki zaroorat nhi hai ham css ko js me import karke and html as jsx likhke in javascript usko react ki help se html me insert kar sakte hai
/*
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const name = "uzaif";

ReactDOM.render(
  <>
    <h1 className="heading">Hello My name is {name}</h1>
  </>,
  document.querySelector("#root")
);
// We can write html css and javascript completely with react that's why React used to create UI as it handle html(jsx) css and javascript.
*/

// How to use google fonts in React JS #15 Lecture
/* 
same jaise tum html css js me use karte the index.html me insert karke
*/

// Internal CSS and Inline CSS Styling in React JS #16 Lecture #Important
/*
import React from "react";
import ReactDOM from "react-dom";

// Inline and Internal styling are not same here in JSX like in html and css
// React me inline css use karne ke liye tumhe pehle css ko ek object banana padega then fir usse use karna padega.
// Property ko tumhe as a string dena padega css ki but key ko camelCase me .
// inline style me hame complete object pass karna padega.

const heading = {
  textAlign: "center",
  textTransform: "uppercase",
  color: "salmon",
  fontWeight: "bold",
  fontSize: "5vw",
  fontFamily: "'Josefin Sans', sans-serif",
  textShadow: "0px 2px 4px #ffe9c5",
  margin: "70px 0px",
};

ReactDOM.render(
  <>
    { <h1 style="color: red;">My Name is Red</h1> We don't do this in JSX }
    <h1 style={heading}>My Name is Red</h1>
  </>,
  document.querySelector("#root")
);
*/

// React JS Challenge #3 #17 Lecture
/*
import React from "react";
import ReactDOM from "react-dom";

const indianTime = new Date().getHours();
let greeting = "";
const greetingStyles = {};

if (12 <= indianTime && indianTime < 19) {
  greeting = "Good Afternoon";
  greetingStyles.color = "green";
} else if (19 <= indianTime && indianTime <= 24) {
  greeting = "Good Night";
  greetingStyles.color = "#444444";
} else if (1 <= indianTime && indianTime <= 11) {
  greeting = "Good Morning";
  greetingStyles.color = "#ffae75";
}

const heading = {
  backgroundColor: "wheat",
  padding: "20px 20px",
  borderRadius: "14px",
  fontSize: "3.8vw",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "sans-serif",
  color: "salmon",
};

ReactDOM.render(
  <>
    <h1 style={heading}>
      Hello Sir, <span style={greetingStyles}>{greeting}</span>
    </h1>
  </>,
  document.querySelector("#root")
);
*/

// React Components (Functional Component) #18 Lecture
/*
// Ham log React me abhi tak hard core react me kaam kar rhe the means ReactDOM.render() me react and jsx ka code likh rhe the etc.... vo hard core react me coding kar rhe the lekin react isse kaafi aage nikal chuka hai isliye ab se ham components me kaam karenge react hard core ke alava.
// component ki file ka first letter always capital hoga.
// jo component ki file ka name dete hai vo hi function based component ke function ka name dete hai

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// component ka ek doosra matlab ye bhi hai ki ham react me khud ka custom html element create kar sakte hai.
// agar koi element ke andar child nhi hai to ham self closing tag ka bhi use kar sakte hai same here in components calling
ReactDOM.render(
  <>
    <Hello></Hello>
    <Paragraph />
    <Lists></Lists>
  </>,
  document.querySelector("#root")
);

ReactDOM.render(<App />, document.querySelector("#root"));
// kal tak ham jaha hard core react me kaam kar rhe the abh ham or bhi easily components ka use karke react me kaam kar sakte hai.
// jab bhi ham log react me kaam karenge ya hamne kisi ko react me kaam krte hue dekha hoga ki index.js page pr itna kuch hota hi nhi hai index.js par sirf ek app component hota hai bas to esa kyu?
// Ans = because hame index.js file ko simplest rakhna hai means as simple as we can that's why ham index.js file me hard core react ka code likhne ke bajaye ek App component me saara apni app ka code likhke usko index.js file ke render me call kar rhe hai.
// If you were to use the ReactDOM.render() method multiple times in different components or in the index.js file, it would result in unexpected behavior and likely lead to errors. because of Root Component Overwriting
*/
