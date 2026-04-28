let RightNumber = "";
let LeftNumber = "";
let TempResult;
let Operator;
let expression = "";

function Calcular(fullAr) {
    clearDisplay();
    let TempString = fullAr;

    while (TempString.includes("(")) {
        TempString = subCalcularParen(TempString);
    }
    while (TempString.includes("*")) {
        TempString = subCalcular(TempString, "*");
    }
    while (TempString.includes("/")) {
        TempString = subCalcular(TempString, "/");
    }
    while (TempString.includes("+")) {
        TempString = subCalcular(TempString, "+");
    }
    while (TempString.indexOf("-", 1) !== -1) {
        TempString = subCalcular(TempString, "-");
    }
    return TempString
}

function subCalcularParen(arr) {
    let inEnd = arr.indexOf(')');
    let inBegin = arr.lastIndexOf('(', inEnd);

    let TempInside = arr.slice(inBegin + 1, inEnd);
    let TempResult = Calcular(TempInside);
    return arr.slice(0, inBegin) + TempResult + arr.slice(inEnd + 1);
}

function subCalcular(arr, symbol) {
    let RightNumber = "";
    let LeftNumber = "";

    let index;
    if (symbol === "-") {
        index = arr.indexOf(symbol, 1);
    } else {
        index = arr.indexOf(symbol);
    }

    let inBegin = index;
    let inEnd = index;

    // a donde inicia 
    while (inBegin > 0) {
        ch = arr[inBegin - 1];
        if (ch >= '0' && ch <= '9') {
            inBegin--;
            LeftNumber = arr[inBegin] + LeftNumber;
        } else if (ch === '-' && (inBegin - 1 === 0 || "+-*/".includes(arr[inBegin - 2]))) {
            inBegin--;
            LeftNumber = '-' + LeftNumber;
            break;
        }
        else {
            break;
        }
    }

    // a donde termina
    while (inEnd < arr.length - 1) {
        ch = arr[inEnd + 1];
        if (ch >= '0' && ch <= '9') {
            inEnd++;
            RightNumber = RightNumber + arr[inEnd];
        } else if (ch === '-' && RightNumber === "" && (inEnd + 1 < arr.length - 1) && (arr[inEnd + 2] >= '0') && arr[inEnd + 2] <= '9') {
            inEnd++;
            RightNumber += '-';
        }
        else {
            break;
        }
    }

    let BeginStr = arr.slice(0, inBegin);
    let EndStr = arr.slice(inEnd + 1, arr.length);

    switch (symbol) {
        case "+":
            TempResult = parseInt(LeftNumber) + parseInt(RightNumber);
            break;
        case "-":
            if (LeftNumber === "") {
                LeftNumber = "0";
            }
            TempResult = parseInt(LeftNumber) - parseInt(RightNumber);
            break;
        case "*":
            TempResult = parseInt(LeftNumber) * parseInt(RightNumber);
            break;
        case "/":
            if (parseInt(RightNumber) !== 0) {
                TempResult = parseInt(LeftNumber) / parseInt(RightNumber);
            } else {
                return "Err";
            }
            break;
    }
    return BeginStr + TempResult + EndStr;
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").innerText = expression;
}

function appendToDisplay(value) {
    expression += value;
    document.getElementById("display").innerText = expression;
}

function appendResult() {
    let expr = document.getElementById("display").innerText;
    clearDisplay();
    document.getElementById("display").innerText = Calcular(expr);
}