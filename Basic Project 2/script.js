const Arr = [];
const RandNom = [];
const form = document.getElementById('form');
const guesses = document.getElementById('guesses');
const generated = document.getElementById('generated');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = document.getElementById('num');
    const error = document.getElementById('error');
    const count = document.getElementById('count');
    const correctNumber = document.getElementById('correctNumber');
    let treem = num.value.trim();
    if (treem === '' || num.value == null || isNaN(num.value)) {
        error.innerText = `This is Not A Number, Please Enter Number`;
        return;
    }
    error.innerText = " ";
    let c = count.innerText;
    if (c == 0 || c <= 0) {
        function al() {
            Swal.fire({
                title: 'About Attemt',
                text: 'You have not Attemt Amout to do this!',
                icon: 'info',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
                background: '#2c2c2c',
                color: '#f0f0f0'
            });
            error.innerText = `Please Reload This Page!!!!.`;
        }
        al();
    } else {
        c = c - 1;
        count.innerText = c;

        let number = num.value;
        num.value = '';

        Arr.push(number);
        guesses.innerHTML = '';

        Arr.forEach(element => {
            let li = document.createElement('li');
            li.innerText = element;
            guesses.appendChild(li);
        });
        const Random = GenRandom()
        RandNom.push(Random);
        generated.innerHTML = '';

        RandNom.forEach(element => {
            let li = document.createElement('li');
            li.innerText = element;
            generated.appendChild(li);
        });

        if (number == Random) {
            Swal.fire({
                title: 'Success!',
                text: `You Guess ${number} Corrctly`,
                icon: 'success',
                background: '#2c2c2c',
                color: '#f0f0f0'
            });
            let co = correctNumber.innerText;
            co++;
            correctNumber.innerText = co;
        }
    }
});

function GenRandom() {
    const Random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return Random;
}