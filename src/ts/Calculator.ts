import { operationsList } from "./operationList.js";

export class Calculator {
    input: HTMLElement;
    output: HTMLElement;

    constructor(input: HTMLElement, output: HTMLElement) {
        this.input = input;
        this.output = output;
        this.clearDisplay();
    }

    clearDisplay = () => {
        this.input.textContent = "";
        this.output.textContent = "";
    };

    deleteSymbol = () => {
        if (this.input.textContent?.length) {
            this.input.textContent = this.input.textContent.slice(0, -1);
        }
    };

    addSymbol = (elem: Event) => {
        let target = elem.target as HTMLElement;
        let numStr = target.textContent;

        if (!this.input.textContent) {
            this.input.textContent = numStr;
            return;
        }

        if (this.input.textContent?.length < 12) {
            if (numStr === ".") {
                if (this.input.textContent?.includes(".")) {
                    return;
                }
                if (this.input.textContent?.length < 1) {
                    this.input.textContent += "0";
                }
            }
            this.input.textContent += numStr;
        }
    };

    addOperation = (elem: Event) => {
        let target = elem.target as HTMLElement;
        let operation = target.textContent;
        if (!this.input.textContent) {
            if (this.output.textContent) {
                this.output.textContent = this.output.textContent.slice(0, -1) + operation;
            }
            return;
        }

        if (this.input.textContent.slice(-1) === ".") {
            this.input.textContent = this.input.textContent.slice(0, -1);
        }

        this.output.textContent = this.input.textContent + operation;
        this.input.textContent = "";
    };

    calculateOperation = () => {
        if (!this.output.textContent) {
            return;
        }

        if (!this.input.textContent) {
            return;
        }

        const num1: number = parseFloat(this.output.textContent.slice(0, -1));
        const num2: number = parseFloat(this.input.textContent);
        const operation = this.output.textContent.slice(-1);

        let result: number;

        if (operationsList.hasOwnProperty(operation)) {
            result = operationsList[operation](num1, num2);
            result = this.precise(result);
            this.output.textContent = result.toString();
            this.input.textContent = "";
        }
    };

    private precise = (num: number) => {
        return parseFloat(num.toPrecision(15));
    };
}
