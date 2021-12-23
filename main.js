
// ----------------------------------------------------------- PROJECT 3. BACKGROUND COLOR PROJECT. -------------------------------------------------------------


// ING. Jorge Ortiz Mata.
// ortiz.mata.jorge@gmail.com
// San Luis Potosí S.L.P. México.
// (444) 576 3034.

// Hello! I'm Jorge. Today, I'm gonna show you this project that I built.
// Once you picked the button below of this section, the background color will change. 
// It'll give you a random color and you can have it either on hexadecimal or in simple form.
// Come on, and have fun with this project.

// ------------------------------------------------------------------- SIMPLE COLORS SECTION ----------------------------------------------------------

// ---------------  CREATE VARIABLES ------------------

const colors = [
    'aliceblue',
    'aqua',
    'aquamarine',
    'bisque',
    'chocolate',
    'coral',
    'crimson',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkred',
    'darksalmon'
];

// ---------------  SELECT OBJETCS ------------------

const backgroundObjects = document.querySelector ('.backgroundObjects');
const backgroundProject = document.querySelector ('.backgroundProject');

// ---------------  CREATE OBJETCS ------------------

const buttonBackgroundChange = document.createElement ('button');
const colorBackgroundTitle = document.createElement ('colorBackgroundTitle');

// ---------------  ADDING CLASES ------------------

buttonBackgroundChange.classList.add ('buttonBackgroundChange');
colorBackgroundTitle.classList.add ('colorBackgroundTitle');

// ---------------  APPEND OBJETCS ------------------

backgroundObjects.appendChild (colorBackgroundTitle);
backgroundObjects.appendChild (buttonBackgroundChange);

// ---------------  ADDING TEXTS ------------------

colorBackgroundTitle.textContent = `default`;
buttonBackgroundChange.innerHTML = `Click me to change.`;

// ---------------  CREATING FUNCTIONS ------------------

changeColor = () => {

    let x = Math.floor(Math.random() * 16);
    backgroundProject.style.backgroundColor = `${colors[x]}`;
    colorBackgroundTitle.innerHTML = `${colors[x]}`;
    console.log (x);

}

// ---------------  ADDING EVENTS LISTENERS ------------------

buttonBackgroundChange.addEventListener ('click', changeColor);

// ------------------------------------------------------------------- HEXADECIMAL COLORS SECTION ----------------------------------------------------------

const hexColors = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
                   'A', 'B', 'C', 'D', 'E', 'F' ];