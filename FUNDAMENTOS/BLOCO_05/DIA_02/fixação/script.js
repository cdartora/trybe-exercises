let you = document.querySelector("#elementoOndeVoceEsta");
you.parentNode.style.color = "blue";
you.firstChild.textContent = "TEXTO";
you.parentElement.firstElementChild;
you.previousElementSibling
you.nextElementSibling;
you.nextSibling;
you.parentElement.lastElementChild.previousElementSibling;

let div1 = document.createElement('div');
div1.innerHTML = "1a Seção";
you.parentElement.appendChild(div1);

let div2 = document.createElement('div');
div2.innerHTML = "2a Seção";
you.appendChild(div2);

let div3 = document.createElement('div');
div3.innerHTML = "3a Seção";
you.firstElementChild.appendChild(div3);

let div4 = document.createElement('div');
div4.innerHTML = "4a Seção";
you.firstElementChild.firstElementChild.appendChild(div4);

let dad = document.getElementById("paiDoPai");
let firstSon = you.firstElementChild;
let father = dad.firstElementChild;

father.removeChild(father.firstElementChild);
father.removeChild(father.lastElementChild);
father.removeChild(father.lastElementChild);
father.removeChild(father.lastElementChild);
father.removeChild(father.lastChild);
father.removeChild(father.lastChild);
father.removeChild(father.lastChild);
you.removeChild(you.lastElementChild);
you.removeChild(you.lastElementChild);
you.removeChild(you.firstChild);
you.firstElementChild.removeChild(you.firstElementChild.firstElementChild);

let removes = document.getElementById("paiDoPai");

removes.removeChild("primeiroFilho");

removes.removeChild(segundoEUltimoFilhoDoFilho);

removes.removeChild(primeiroFilho);

removes.removeChild(primeiroFilho);

removes.removeChild(primeiroFilho);

removes.removeChild(primeiroFilho);

removes.removeChild(primeiroFilho);
