
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
const colorBackgroundTitle = document.createElement ('p');

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

// ---------------  CREATE VARIABLES ------------------

const hexColors = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
                   'A', 'B', 'C', 'D', 'E', 'F' ];

// ---------------  SELECT OBJETCS ------------------

const hexColorsSection = document.querySelector ('.hexColorsSection');

// ---------------  CREATE OBJETCS ------------------

const divHexBack = document.createElement ('div');
const hexTitle = document.createElement ('h2');
const hexParragph = document.createElement ('p');
const hexCode = document.createElement ('p');
const hexButton = document.createElement ('button');

// ---------------  APPEND OBJETCS ------------------

hexColorsSection.appendChild (divHexBack);
divHexBack.appendChild (hexTitle);
divHexBack.appendChild (hexParragph);
divHexBack.appendChild (hexCode);
divHexBack.appendChild (hexButton);

// ---------------  ADDING CLASSES ------------------

divHexBack.classList.add ('divHexBack');
hexTitle.classList.add ('hexTitle');
hexParragph.classList.add ('hexParragph');
hexCode.classList.add ('hexCode');
hexButton.classList.add ('hexButton');

// ---------------  ADDING TEXTS ------------------

hexTitle.textContent = `Hexadecimal Background Color`;
hexParragph.textContent = `Once you clicked on the button below, the background of this change will change.`;
hexCode.textContent = `default`;
hexButton.textContent = `Click me to change`;

// ---------------  CREATE EVENT LISTENERS ------------------

hexButton.addEventListener ('click', function () {

    let cadena = '#';

    for (let i = 0; i < 6; i++) {
        let y = Math.floor (Math.random () * 15);
        cadena += hexColors[y];
    }

    console.log(cadena);
    hexCode.textContent = `${cadena}`;
    hexColorsSection.style.backgroundColor = `${cadena}`;

});

// ------------------------------------------------------------------- WINDOW SCROLL FUNCTION ----------------------------------------------------------

const showMoreSection = document.querySelector ('.showMoreSection');
const buttonShowMore = document.querySelector ('.buttonShowMore');

buttonShowMore.addEventListener ('click', function () {
    window.scrollTo ({
    left: 0,
    top: showMoreSection.offsetTop,
    });
});