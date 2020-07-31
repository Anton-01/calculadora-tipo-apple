var operator = null;
var inputValueMemo = 0;

function getContentClick(event) {
    const value = event.target.innerHTML;
    filterAction(value);
}

const filterAction = value => {
    value === '0' ? addNumberinput(0) : null;
    value === '1' ? addNumberinput(1) : null;
    value === '2' ? addNumberinput(2) : null;
    value === '3' ? addNumberinput(3) : null;
    value === '4' ? addNumberinput(4) : null;
    value === '5' ? addNumberinput(5) : null;
    value === '6' ? addNumberinput(6) : null;
    value === '7' ? addNumberinput(7) : null;
    value === '8' ? addNumberinput(8) : null;
    value === '9' ? addNumberinput(9) : null;
    value === ',' ? addNumberinput(',') : null;

    value === '+' ? setOperacion('+') : null;
    value === '-' ? setOperacion('-') : null;
    value === 'X' ? setOperacion('*') : null;
    value === '/' ? setOperacion('/') : null;
    value === '%' ? setOperacion('%') : null;
    value === '+/-' ? setOperacion('+/-') : null;

    value === '=' ? calculation() : null;

    value === 'AC' ? resetCalculator() : null;

}

function addNumberinput(value) {
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    const inputValue = inputScreen.value;

    if (inputValue === '0' && inputValue.length === 1 && value !== ',') {
        inputScreen.value = value;
        return
    }

    if (inputScreen === '' && value === ',') {
        inputScreen.value = 0 + value;
        return
    }

    inputScreen.value = inputValue + value;
}

function setOperacion(operator) {
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    this.operator = operator;
    if (inputScreen.value != 0) {
        calculation();
    }
}

function calculation() {
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    let valueOne = transformComaToPoint(this.inputValueMemo);
    let valueTwo = transformComaToPoint(inputScreen.value);
    let total = 0;

    if (this.operator === '+' && inputScreen.value !== '') {
        total = valueOne + valueTwo;
    }

    if (this.operator === '-' && inputScreen.value !== '') {
        if (valueOne !== 0) {
            total = valueOne - valueTwo;
        } else {
            total = valueTwo;
        }

    }

    if (this.operator === '*' && inputScreen.value !== '') {
        if (valueOne !== 0) {
            total = valueOne * valueTwo;
        } else {
            total = valueTwo;
        }

    }

    if (this.operator === '%' && inputScreen.value !== '') {
        total = valueTwo / 100;
    }

    if (this.operator === '+/-' && inputScreen.value !== '') {
        if (valueTwo > 0) {
            total = -valueTwo;
        }
    }

    if (this.operator === '/' && inputScreen.value !== '') {
        if (valueOne !== 0) {
            total = valueOne / valueTwo;
        } else {
            total = valueTwo;
        }

    }


    total = transformPointToComa(total);
    this.inputValueMemo = total;
    inputScreen.value = '';
    inputScreen.placeholder = total;
}

const resetCalculator = () => {
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    inputScreen.value = 0;
    this.inputValueMemo = 0;
    this.operator = null;
}

function transformComaToPoint(value) {
    if (typeof value !== 'number') {
        let resultTransform = value.replace(',', '.');
        return parseFloat(resultTransform);
    }
    return value;
}

function transformPointToComa(value) {
    let resultTransform = value.toString()
    resultTransform = resultTransform.replace('.', ',');
    return resultTransform;
}
//Mi vida es una chingoneria