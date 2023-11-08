interface OperationsList {
    [index: string]: (a: number, b: number) => number;
}

const operationsList: OperationsList = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
};

export { operationsList };
