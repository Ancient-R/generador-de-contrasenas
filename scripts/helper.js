

// función para generar contraseña
const generatePassword = () => {

    showPassword.value = '';
    if( passwordGenerate.length > 0 ) passwordGenerate = []


    // verifica que este marcado el check de minúsculas
    if( checkMinus.checked ){
        // realiza un bucle con el total de caracteres del input rangeMinus
        for( let i = 1; i<=labelMinus.textContent; i++){
            // genera un número random con el tamaño del arreglo de minusculas
            let minusRand = Math.floor( Math.random() * (lettersMin.length) );
            // agrega un caracter en la posición random en cada vuelta de bucle
            passwordGenerate.push( lettersMin[minusRand]);
        }
    }

    if( checkMayus.checked ){
        for( let j = 1; j<= labelMayus.textContent; j++){
            let mayusRand = Math.floor( Math.random() * (lettersMay.length) );
            passwordGenerate.push( lettersMay[mayusRand])
        }
    }

    if( checkNumbers.checked ){
        for( let k=1; k <= labelNumbers.textContent; k++){
            let numbersRand = Math.floor( Math.random() * ( numbers.length ));
            passwordGenerate.push( numbers[ numbersRand ]);
        }

    }

    if( checkSymbols.checked ){
        for( let h=1; h <= labelSymbols.textContent; h++){
            let symbolsRand = Math.floor( Math.random() * ( symbols.length ));
            passwordGenerate.push( symbols[ symbolsRand ]);
        }
    }


    // muestra el valor del arreglo generado en el input showPassword
    showPassword.value = passwordGenerate.sort(() => { return Math.random() - 0.5}).toString().replaceAll(',', '');
}