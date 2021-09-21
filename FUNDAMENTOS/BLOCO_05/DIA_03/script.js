function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1 
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const ul = document.createElement('ul');
ul.id = 'days';
document.body.appendChild(ul);

for (let i = 0; i < dezDaysList.length; i += 1) {
let li = document.createElement('li');

li.className = 'day';
li.innerText = dezDaysList[i];

if (i > 1 && dezDaysList[i] == 25 || i > 1 && dezDaysList[i] == 24 || i > 1 && dezDaysList[i] == 31) {
    li.classList.add("holiday");
}
if (dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18 || dezDaysList[i] == 25) {
    li.classList.add("friday");
}

ul.appendChild(li);
}

// 2
function createHoliday(str) {
    const btn = document.createElement("button");
    btn.id = 'btn-holiday';
    btn.innerHTML = str;
    document.querySelector(".buttons-container").appendChild(btn);
}

createHoliday("Feriados");

// 3
const feriados = document.querySelector("#btn-holiday");

feriados.addEventListener("click", function() {
    for (let i = 0; i < ul.children.length; i += 1) {
        let li = ul.children[i];

        if (li.className.includes("holiday") && !(li.style.backgroundColor.includes("green"))) {

            li.style.backgroundColor = "green";
        } 
        else if (li.className.includes('holiday') && li.style.backgroundColor.includes('green')) {

            li.style.backgroundColor = "rgb(238,238,238)";
        }
    }
})

// 4
function createFriday(str) {
    const btn = document.createElement("button");
    btn.id = 'btn-friday';
    btn.innerHTML = str;
    document.querySelector(".buttons-container").appendChild(btn);
}

createFriday("Sexta-feira");

// 5
const sexta = document.querySelector("#btn-friday");
const fridayDays = document.querySelectorAll('.friday');

sexta.addEventListener("click", function() {
    for (let i = 0; i < ul.children.length; i += 1) {
        let li = ul.children[i];

        if (li.className.includes("friday") && Number.isInteger(parseInt(li.innerHTML))) {
            li.innerHTML = "Sexta";
        } else if (li.className.includes("friday") && !(Number.isInteger(parseInt(li.innerHTML)))){
            li.innerHTML = parseInt(ul.children[i+1].innerHTML) - 1;
        }
    }
})

// 6
for (let i = 0; i < ul.children.length; i+=1) {
    let li = ul.children[i];

    li.addEventListener("mouseover", function(e) {
        e.target.style.border = 'solid 1px green'
    })
    li.addEventListener("mouseout", function(e) {
        e.target.style.border = '0px'
    })
}

// 7
const input = document.querySelector("#task-input");
const add = document.querySelector("#btn-add");

add.addEventListener('click', function() {
    let task = document.createElement("span");
    task.innerHTML = input.value + ' ';
    document.querySelector(".my-tasks").appendChild(task);
})

// 8
function colorSubtitle (color) {
    const div = document.createElement('div');
    div.style.backgroundColor = color;
    div.className = 'task'
    document.querySelector('.my-tasks').appendChild(div);
}

colorSubtitle("red");
colorSubtitle("yellow");

// 9
const tasks = document.querySelectorAll('.my-tasks div')

for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].className.includes('task')) {
        tasks[i].addEventListener('click', function(e) {
            let isSelected = false;

            if (e.target.className.includes('selected')){
                e.target.classList.remove("selected");

                isSelected = false;
            }
            else if (isSelected == false) {
                unSelect();

                e.target.classList.add("selected")

                isSelected = true;
            }

            function unSelect() {
                for(let i = 0; i < tasks.length; i += 1) {
                    if(tasks[i].className.includes("selected")) {
                        tasks[i].classList.remove("selected");
                    }
                }
            }
        })
    }
}

// 10
const days = ul.children;

for (let i = 0; i < days.length; i += 1) {
    days[i].addEventListener("click", function(e) {
        let color = document.querySelector(".selected").style.backgroundColor;

        if (e.target.style.color != color){
            e.target.style.color = color;

            deSelect(e.target);
        }

        function deSelect (e) {
            e.addEventListener("click", function(e) {
                e.target.style.color = 'rgb(119,119,119)';
            })    
        }
    })
}
