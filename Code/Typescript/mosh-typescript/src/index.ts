

///Let's goooooooooooooo!!!!!!!!!

function calculateTax(income: number, taxYear = 2021): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

console.log( calculateTax(10_000) );

type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textbox: UIWidget = {
    drag: () => {},
    resize: () => {},
}

type Quantity =  50 | 100;
let quantity: Quantity = 100;