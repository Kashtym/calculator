const calcDisplayInput = document.querySelector(".display__item_input") as HTMLElement;
const calcDisplayOutput = document.querySelector(".display__item_output") as HTMLElement;

const calcBtnNumbers = document.querySelectorAll(".button_number");
const calcBtnOperations = document.querySelectorAll(".button_operation");
const calcBtnOperationAC = document.querySelector(".button_operation-AC");
const calcBtnOperationDel = document.querySelector(".button_operation-delete");
const calcBtnOperationCalc = document.querySelector(".button_operation-calculate");
const calcBtnSymbolPoint = document.querySelector(".button_symbol-point");

class Calculator {
    input: HTMLElement;
    output: HTMLElement;

    constructor(input: HTMLElement, output: HTMLElement) {
        this.input = input;
        this.output = output;
    }

    clearDisplay(): void {
        this.input.textContent = "";
        this.output.textContent = "";
    }

    clearDis = () => {
        this.input.textContent = "";
        this.output.textContent = "";
        console.log(this);
    };
}

// if (calcDisplayInput != undefined && calcDisplayOutput != undefined) {}

const calculator = new Calculator(calcDisplayInput, calcDisplayOutput);

// calcBtnOperationAC?.addEventListener("click", () => {
//     calculator.clearDisplay();
// });

calcBtnOperationAC?.addEventListener("click", calculator.clearDis);
