import { Calculator } from "./Calculator";

const calcDisplayInput = document.querySelector(".display__item_input") as HTMLElement;
const calcDisplayOutput = document.querySelector(".display__item_output") as HTMLElement;

const calcBtnSymbols = document.querySelectorAll(".button_symbol");
const calcBtnOperations = document.querySelectorAll(".button_operation");
const calcBtnOperationAC = document.querySelector(".button_operation-AC");
const calcBtnOperationDel = document.querySelector(".button_operation-delete");
const calcBtnOperationCalc = document.querySelector(".button_operation-calculate");

if (calcDisplayInput != undefined && calcDisplayOutput != undefined) {
    const calculator = new Calculator(calcDisplayInput, calcDisplayOutput);

    calcBtnOperationAC?.addEventListener("click", calculator.clearDisplay);
    calcBtnOperationDel?.addEventListener("click", calculator.deleteSymbol);
    calcBtnOperationCalc?.addEventListener("click", calculator.calculateOperation);

    calcBtnSymbols.forEach((btnSymb) => {
        btnSymb.addEventListener("click", calculator.addSymbol);
    });

    calcBtnOperations.forEach((btnOper) => {
        btnOper.addEventListener("click", calculator.addOperation);
    });
}
