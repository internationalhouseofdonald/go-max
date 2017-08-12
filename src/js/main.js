import '../css/reset.css';
import '../css/bootstrap.css';
import '../scss/styles.scss';
import '../css/styles.css';
import './bootstrap';
import $ from './jquery';

import mov from '../media/0000-0300.mp4';

function render_arrows() {
  var vidtag;
  vidtag = document.getElementById('arrows');
  vidtag.src = mov;
}

render_arrows();

function render() {
  var div, content;
  div = document.createElement('div');
  content = "Hello World";
  div.innerHTML = content;
  div.classList.add('hello');
  return div;
}

$(document).ready(function() {
  console.log("jquery loaded");
});

// document.body.appendChild(render()); 