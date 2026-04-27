
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    }
    return "Error: Division por cero no permitida.";
}

let resultado = suma(5, 3) + " " + resta(5, 3) + " " + multiplicacion(5, 3) + " " + division(5, 3);
document.getElementById("resultado").innerText = resultado;
