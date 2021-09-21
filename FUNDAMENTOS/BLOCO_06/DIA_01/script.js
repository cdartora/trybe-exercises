const data = document.querySelector('#date');
const select = document.querySelector('#state');
const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
const submitBtn = document.querySelector('#submit');


function validateDate() {
    let day = '';
    let month = '';
    let year = '';

    for (let i = 0; i < data.value.length; i += 1) {
        if (i < 2) {
            day += data.value[i];
        } else if (i > 2 && i < 5) {
            month += data.value[i];
        } else if (i > 5) {
            year += data.value[i];
        }
    }

    if (parseInt(day) < 0 || parseInt(day) > 31) {
        alert('Dia inválido');
        data.value = '';
    } else if (parseInt(month) < 0 || parseInt(month) > 12) {
        alert('Mês inválido');
        data.value = '';
    } else if (parseInt(year) < 0) {
        alert('Ano inválido');
        data.value = '';
    }
}

for (let i = 0; i < states.length; i += 1) {
    const option = document.createElement('option');
    option.name = 'states';
    option.innerHTML = states[i];
    select.appendChild(option);
}

function preventDefault(e) {
    e.preventDefault();
}

data.addEventListener('change', validateDate);
submit.addEventListener('click', preventDefault);