function addItem() {
    let dropdownMenu = document.getElementById('menu');
    let textField = document.getElementById('newItemText');
    let valueField = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    optionElement.text = textField.value;
    optionElement.value = valueField.value;
    dropdownMenu.appendChild(optionElement);

    textField.value = '';
    valueField.value = '';
}