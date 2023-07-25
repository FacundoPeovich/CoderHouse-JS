function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "No se puede dividir por cero";
            }
            return num1 / num2;
        case "sqrt":
            if (num1 < 0) {
                return "No se puede calcular la raíz cuadrada de un número negativo";
            }
            return Math.sqrt(num1);
        case "USD-EUR":
            return num1 * 0.85; // Tasa de cambio fija de dólares a euros (1 USD = 0.85 EUR)
        default:
            return "Operación no encontrada";
    }
}

alert("Hola, esta es una calculadora virtual, a continuación ingrese los operandos a resolver");

let memoria = ""; // Cadena para almacenar las operaciones realizadas // Variable Global

do {
    const numero1 = parseFloat(prompt("Ingrese el operando uno"));
    const numero2 = parseFloat(prompt("Ingrese el operando dos"));
    const operacion = prompt(
        "Ingrese la operación (+ para suma, - para resta, * para multiplicación, / para división, sqrt para raíz cuadrada, USD-EUR para convertir de dólares a euros, o escriba 'salir' para terminar)"
    );

    if (operacion.toLowerCase() === "salir") {
        break;
    } else {
        const resultado = calculadora(numero1, numero2, operacion);
        memoria += `Resultado (${numero1} ${operacion} ${numero2}): ${resultado}\n`; // concatena la operación actual y su resultado a la cadena memoria. con \n genero una línea debajo de otra.
        alert(`El resultado de la operación es: ${resultado}`);
    }

    const deseaContinuar = prompt("¿Desea continuar operando? (Ingrese 'si' o 'no')");
    if (deseaContinuar.toLowerCase() !== "si") {
        break;
    }
} while (true);

// Mostrar todas las operaciones realizadas al final
alert(`Operaciones realizadas:\n${memoria}`);




// Anotaciones.



/* 
    Se ejecuta la variable memoria por fuera del ciclo para que sea global y que cuando el 
    programa entre al ciclo, se vayan concatenando los resultados a la cadena de esta variable.
*/



/* 
    Se utiliza el ciclo do-while para que el pograma se ejecute indefinidamente hasta que se ejecute la instrucción break
    Cuando el usuario ingresa "salir" como operación el bucle se va a detener con el break así el programa continúa 
    después del bloque do-while para mostrar los resultados almacenados.
*/



/* 
    El bloque ubicado dentro del ciclo do-while
    
    if (operacion.toLowerCase() === "salir") {
        break;
    }
    Sirve para que el usuario pueda decidir salir cuando quiera ingresando la palabra salir
*/


/* 
    Luego, en el bloque

    const deseaContinuar = prompt("¿Desea continuar operando? (Ingrese 'si' o 'no')");
    if (deseaContinuar.toLowerCase() !== "si") {
        break;
    }

    Si el usuario ingresa "si", se continuará con el bucle y se le pedirá una nueva operación. Si el usuario ingresa "no" o cualquier otra respuesta diferente a "si", el programa saldrá del bucle y mostrará los resultados almacenados.

    Por ende tengo dos maneras de terminar el ciclo, cuando el usuario quiera con el prompt salir, o al final de cada operación con la constante deseaContinuar.
*/




