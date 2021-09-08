const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const all = document.getElementsByTagName("*");

firstLi.addEventListener("click", addTechClass);
secondLi.addEventListener("click", addTechClass);
thirdLi.addEventListener("click", addTechClass);

function addTechClass (event) {
  for (let i = 0; i < all.length; i += 1) {
    if (all[i].className == 'tech') {
      all[i].className = '';
    }
  }

  event.target.className = 'tech';
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("keyup", changeText);

function changeText () {
  document.querySelector('.tech').innerText = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
const header = document.querySelector("h1");
header.addEventListener("dblclick", redirect);

function redirect() {
  window.open("https://cdartora.github.io/", "_blank");
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
firstLi.addEventListener("mouseover", changeColor);
secondLi.addEventListener("mouseover", changeColor);
thirdLi.addEventListener("mouseover", changeColor);

function changeColor (e) {
  e.target.style.backgroundColor = "grey";
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.