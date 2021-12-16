
// estos eventos cambian el valor de la etiqueta "numero de caracteres" por el valor del input
rangeMinus.addEventListener('change', e => {
    labelMinus.textContent = e.target.value;
});

rangeMayus.addEventListener('change', e => {
    labelMayus.textContent = e.target.value;
});

rangeNumbers.addEventListener('change', e => {
    labelNumbers.textContent = e.target.value;
});

rangeSymbols.addEventListener('change', e => {
    labelSymbols.textContent = e.target.value;
});


// botón que genera el password
buttonGenerate.addEventListener('click', e => {
    e.preventDefault();
    generatePassword();
});

// botón para copiar contraseña
buttonCopy.addEventListener('click', e => {
    e.preventDefault();


    navigator.clipboard.readText()
        .then()
        .catch( error => console.log(error));

    navigator.clipboard.writeText( showPassword.value )
        .then(() => alert('Contraseña copiada'))
        .catch( () => alert('Ha ocurrido un error'));
});

window.onload = generatePassword();