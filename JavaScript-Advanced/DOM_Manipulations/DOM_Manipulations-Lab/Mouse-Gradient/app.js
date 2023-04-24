function attachGradientEvents() {
    let gradientBoxElement = document.getElementById('gradient-box');
    let resultElement = document.getElementById('result');

    gradientBoxElement.addEventListener('mousemove', function (e) {

        let percent = Math.floor((e.offsetX / (e.target.clientWidth)) * 100);

        resultElement.textContent = `${percent}%`;
    }

    );
    gradientBoxElement.addEventListener('mouseout', () => {
        document.getElementById('result').textContent = "";


    })
}