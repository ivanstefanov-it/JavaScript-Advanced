function calc() {
    const firstNumber = Number(document.getElementById('num1').value);
    const secondNumber = Number(document.getElementById('num2').value);

    const result = firstNumber + secondNumber;

    document.getElementById('sum').value = result;
}
