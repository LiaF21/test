let RightNumber = "";
let LeftNumber = "";
let TempResult;

function Calcular(fullAr) {
    TempString = fullAr;

    while (TempString.includes("*")) {
        TempString = subCalcular(TempString, "*");
    }

    while (TempString.includes("/")) {
        TempString = subCalcular(TempString, "/");
    }

    while (TempString.includes("+")) {
        TempString = subCalcular(TempString, "+");
    }

    while (TempString.includes("-")) {
        if (TempString[0] === '-') { break; }
        TempString = subCalcular(TempString, "-");
    }

    return TempString
}

function subCalcular(arr, symbol) {
    RightNumber = "";
    LeftNumber = "";

    index = arr.indexOf(symbol);
    inBegin = index;
    inEnd = index;

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

    BeginStr = arr.slice(0, inBegin);
    EndStr = arr.slice(inEnd + 1, arr.length);

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


let resultado = Calcular("2-4*3+5/2");
console.log(resultado); 
