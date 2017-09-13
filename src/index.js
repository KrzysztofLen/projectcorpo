/*eslint-disable no-unused-vars*/
import './js/jquery.scrollTo';
import './js/jquery.nav';
import './js/jquery.parallax-1.1.3';
import './js/custom';
import './index.css';

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import Carousel from './app/carousel.component.jsx'; // import the main app component
import Phone from './app/phone.component.jsx'; // import the main app component
import Team from './app/team.component.jsx'; // import the main app component
/*eslint-enable no-unused-vars*/

/*eslint-disable*/
ReactDOM.render(<Carousel />, document.getElementById('slider'));
ReactDOM.render(<Phone />, document.getElementById('holder'));
ReactDOM.render(<Team />, document.getElementById('team'));
/*eslint-enable*/

//TODO Implement generate index.html in dist folder. Include minification CSS and generate into dist.
