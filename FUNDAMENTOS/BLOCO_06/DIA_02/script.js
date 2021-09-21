const data = document.querySelector('#date');
const select = document.querySelector('#state');
const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
const submitBtn = document.querySelector('#submit');

for (let i = 0; i < states.length; i += 1) {
    const option = document.createElement('option');
    option.name = 'states';
    option.innerHTML = states[i];
    select.appendChild(option);
};
