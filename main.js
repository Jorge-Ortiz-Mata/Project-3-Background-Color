
const colors = [
    'orange',
    'blue',
    'green',
    'red',
    'pink',
    'yellow',
];

const backgroundObjects = document.querySelector ('.backgroundObjects');

const buttonBackgroundChange = document.createElement ('button');
const colorBackgroundTitle = document.createElement ('colorBackgroundTitle');

buttonBackgroundChange.classList.add ('buttonBackgroundChange');
colorBackgroundTitle.classList.add ('colorBackgroundTitle');

backgroundObjects.appendChild (colorBackgroundTitle);
backgroundObjects.appendChild (buttonBackgroundChange);

colorBackgroundTitle.innerHTML = `default`;
buttonBackgroundChange.innerHTML = `Click me to change.`;
