import '../scss/styles.scss';
import '../css/styles.css';
import '../css/reset.css'; 

function render() {
  var div, content;
  div = document.createElement('div');
  content = "Hello World";
  div.innerHTML = content;
  div.classList.add('hello');
  return div;
}

document.body.appendChild(render());