import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
var tmax_optionsGlobal = {
  repeat: -1,
  repeatDelay: 0.65,
  yoyo: true
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = 'svg *',
    stagger_val = 0.0125,
    duration = 0.75;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-500, 500),
    y: '+=' + getRandom(-500, 500),
    rotation: '+=' + getRandom(-720, 720),
    scale: 0,
    opacity: 0
  });
});

var stagger_opts_to = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeInOut
};

tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

var $svg = $('svg');
$svg.hover(
  function() {
    tl.timeScale(0.15);
  },
  function() {
    tl.timeScale(1);
  });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
