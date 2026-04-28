let RightNumber = "";
let LeftNumber = "";
let TempResult;
let Operator;


function Calcular(fullAr) {
    TempString = fullAr;

    while (fullAr.includes("*")) {
        TempString = calcularMult(TempString);
    }


}

function calcularMult(arr) {
    RightNumber = " ";
    LeftNumber = " ";

    index = arr.indexOf("*");
    inBegin = index;
    inEnd = index;

    // a donde inicia la multiplicacion
    ch = '0';
    while (ch >= '0' && ch <= '9') {
        inBegin--;
        LeftNumber = arr[inBegin] + LeftNumber;
        ch = arr[inBegin - 1];
    }

    // a donde termina la multiplicacion
    ch = '0';
    while (ch >= '0' && ch <= '9') {
        inEnd++;
        RightNumber = RightNumber + arr[inEnd];
        ch = arr[inEnd + 1];
    }

    BeginStr = arr.slice(0, inBegin);
    EndStr = arr.slice(inEnd + 1, arr.length);

    TempResult = multiplicacion(parseInt(LeftNumber), parseInt(RightNumber));
    return BeginStr + TempResult + EndStr;
}





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

let resultado = calcularMult("3+56*24-4");
console.log(resultado); 
