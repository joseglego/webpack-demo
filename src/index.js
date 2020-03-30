import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';
import XMLData from './data.xml';
import JSONData from './data.json';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Add CSS
  element.classList.add('hello');

  // Add Img
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // Add DATA
  console.log('XML Data: ', XMLData);
  console.log('JSON Data: ', JSONData);

  return element;
}

document.body.appendChild(component());
