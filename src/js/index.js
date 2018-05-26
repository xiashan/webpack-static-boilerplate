import '../scss/index.scss';
import sound from '../images/icon-sound-nor.png';

function component() {
    let element = document.createElement('div');

    element.innerHTML = 'Hello3333333';
    element.classList.add('hello');

    const img = new Image();
    img.src = sound;
    element.appendChild(img);

    return element;
  }

  document.body.appendChild(component());