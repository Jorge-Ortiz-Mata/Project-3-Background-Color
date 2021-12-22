
const colors = [
    'orange',
    'blue',
    'green',
    'red',
    'pink',
    'yellow',
    'antiquewhite',
    'aquamarine',
    'aqua',
    'brown'
];

const backgroundObjects = document.querySelector ('.backgroundObjects');
const backgroundProject = document.querySelector ('.backgroundProject');

const buttonBackgroundChange = document.createElement ('button');
const colorBackgroundTitle = document.createElement ('colorBackgroundTitle');

buttonBackgroundChange.classList.add ('buttonBackgroundChange');
colorBackgroundTitle.classList.add ('colorBackgroundTitle');

backgroundObjects.appendChild (colorBackgroundTitle);
backgroundObjects.appendChild (buttonBackgroundChange);

colorBackgroundTitle.textContent = `default`;
buttonBackgroundChange.innerHTML = `Click me to change.`;

changeColor = () => {

    let x = Math.floor(Math.random() * 10);
    backgroundProject.style.backgroundColor = `${colors[x]}`;
    colorBackgroundTitle.innerHTML = `${colors[x]}`;
    console.log (x);

}

buttonBackgroundChange.addEventListener ('click', changeColor);