const sepiaBg = document.querySelector("#sepia-bg");
const blackBg = document.querySelector("#black-bg");
const whiteBg = document.querySelector("#white-bg");

sepiaBg.addEventListener("click", function() {
    document.body.style.backgroundColor = "#f7e3cf";
})

blackBg.addEventListener("click", function() {
    document.body.style.backgroundColor = "#3d3d3d";
})

whiteBg.addEventListener("click", function() {
    document.body.style.backgroundColor = "#ffffff";
})

const sepiaFont = document.querySelector("#sepia-font");
const blackFont = document.querySelector("#black-font");
const whiteFont = document.querySelector("#white-font");

blackFont.addEventListener("click", function() {
    document.body.style.color = "#000000";
})
whiteFont.addEventListener("click", function() {
    document.body.style.color = "#ffffff";
})
sepiaFont.addEventListener("click", function() {
    document.body.style.color = "#f7e3cf";
})

const moreBtn = document.querySelector("#more");
const lessBtn = document.querySelector("#less");
document.querySelector("main").style.fontSize = '20px';

moreBtn.addEventListener("click", function() {
    let size = parseInt(document.querySelector("main").style.fontSize) + 1;
    document.querySelector("main").style.fontSize = size + 'px';
})
lessBtn.addEventListener("click", function() {
    let size = parseInt(document.querySelector("main").style.fontSize) - 1;
    document.querySelector("main").style.fontSize = size + 'px';
})

const moreSpacing = document.querySelector("#more-spacing");
const lessSpacing = document.querySelector("#less-spacing");
document.querySelector("main").style.lineHeight = '20px'

moreSpacing.addEventListener("click", function() {
    let height = parseInt(document.querySelector("main").style.lineHeight) + 1;
    document.querySelector("main").style.lineHeight = height + 'px';
})
lessSpacing.addEventListener("click", function() {
    let height = parseInt(document.querySelector("main").style.lineHeight) - 1;
    document.querySelector("main").style.lineHeight = height + 'px';
})

const verdana = document.querySelector("#verdana");
const arial = document.querySelector("#arial");
const monospace = document.querySelector("#monospace");

verdana.addEventListener("click", function () {
    document.querySelector("main").style.fontFamily = "verdana";
})
arial.addEventListener("click", function () {
    document.querySelector("main").style.fontFamily = "arial";
})
monospace.addEventListener("click", function () {
    document.querySelector("main").style.fontFamily = "monospace";
})