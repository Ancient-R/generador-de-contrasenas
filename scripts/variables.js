

// variables para generar contraseña

const lettersMin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const lettersMay = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];

const symbols = ['*', '+', '-', '_', '!', '¡', '?', '¿', '(', ')', '{', '}', '#', '$', '%', '&', '/', '=', '[', ']', '~'];

// aquí se guardará la contraseña 
let passwordGenerate = []


// campo donde se mostraŕa la contraseña
const showPassword = document.getElementById('show-password');
// botón que genera la contraseña
const buttonGenerate = document.getElementById('password-generate');
// botón que copia la contraseña
const buttonCopy = document.getElementById('password-copy');


// total minúsculas
    // etiqueta donde se mostrará el total de caracteres en minúsculas
const labelMinus = document.getElementById('minus-total');
    // campo check para verificar si ha sido marcado
const checkMinus = document.getElementById('minus-check');
    // campo range para el total de caracteres
const rangeMinus = document.getElementById('minus-range');

// total mayúsculas
const labelMayus = document.getElementById('mayus-total');
const checkMayus = document.getElementById('mayus-check');
const rangeMayus = document.getElementById('mayus-range');

// total números
const labelNumbers = document.getElementById('numbers-total');
const checkNumbers = document.getElementById('numbers-check');
const rangeNumbers = document.getElementById('numbers-range');

// total símbolos
const labelSymbols = document.getElementById('symbols-total');
const checkSymbols = document.getElementById('symbols-check');
const rangeSymbols = document.getElementById('symbols-range');