// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen  = function(valueInDollar) {
    // Convertimos el valor a yenes japoneses
    let valueInYenes = (valueInDollar/1.07) * 156.5;
    // Retornamos el valor en yenes
    return valueInYenes;
}

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYenes) {
    // Convertimos el valor a libras esterlinas
    let valueInLibras = (valueInYenes/156.5) * 0.87;
    // Retornamos el valor en libras
    return valueInLibras;
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound };
