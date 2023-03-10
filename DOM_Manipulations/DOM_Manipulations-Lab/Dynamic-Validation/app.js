function validate() {
    let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)/;

    let inputElement = document.getElementById('email');
    let text = inputElement.value;
    console.log(text);

    inputElement.addEventListener('change', function (e) {

        if (regex.test(e.target.value)) {
            e.target.classList.remove('error')
            console.log('Yes');
        }
        else {
            e.target.classList.add('error');
            console.log('No');
        }
    })
}