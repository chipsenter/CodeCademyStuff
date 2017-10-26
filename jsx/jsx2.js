import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
let myDiv = <div className="big"> I AM A BIG DIV </div>;
ReactDOM.render(myDiv, document.getElementById("app"));

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
let math = <h1>2 + 3 = {2 + 3}</h1>;
ReactDOM.render(math, document.getElementById('app'));


import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
let gooseImg = <img src={goose} />
ReactDOM.render(gooseImg, document.getElementById('app'));