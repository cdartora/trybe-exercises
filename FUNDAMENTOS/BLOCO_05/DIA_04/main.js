const sepiaBg = document.querySelector("#sepia-bg");
const blackBg = document.querySelector("#black-bg");
const whiteBg = document.querySelector("#white-bg");
const bodyStyle = document.body.style;

sepiaBg.addEventListener("click", function() {
    bodyStyle.backgroundColor = "#f7e3cf";
    LocalStorageHandler("background", "sepia");
})

blackBg.addEventListener("click", function() {
    bodyStyle.backgroundColor = "#3d3d3d";
    LocalStorageHandler("background", "black");
})

whiteBg.addEventListener("click", function() {
    bodyStyle.backgroundColor = "#ffffff";
    LocalStorageHandler("background", "white");
})

const sepiaFont = document.querySelector("#sepia-font");
const blackFont = document.querySelector("#black-font");
const whiteFont = document.querySelector("#white-font");

blackFont.addEventListener("click", function() {
    bodyStyle.color = "#000000";
    LocalStorageHandler("fontColor", "black")
})
whiteFont.addEventListener("click", function() {
    bodyStyle.color = "#ffffff";
    LocalStorageHandler("fontColor", "white")
})
sepiaFont.addEventListener("click", function() {
    bodyStyle.color = "#f7e3cf";
    LocalStorageHandler("fontColor", "sepia")
})

const moreBtn = document.querySelector("#more");
const lessBtn = document.querySelector("#less");
const mainStyle = document.querySelector("main").style;
mainStyle.fontSize = '20px';

moreBtn.addEventListener("click", function() {
    let size = parseInt(mainStyle.fontSize) + 1;
    mainStyle.fontSize = size + 'px';
    LocalStorageHandler("fontSize", mainStyle.fontSize);
})
lessBtn.addEventListener("click", function() {
    let size = parseInt(mainStyle.fontSize) - 1;
    mainStyle.fontSize = size + 'px';
    LocalStorageHandler("fontSize", mainStyle.fontSize);
})

const moreSpacing = document.querySelector("#more-spacing");
const lessSpacing = document.querySelector("#less-spacing");
mainStyle.lineHeight = "20px";

moreSpacing.addEventListener("click", function() {
    let height = parseInt(mainStyle.lineHeight) + 1;
    mainStyle.lineHeight = height + 'px';
    LocalStorageHandler("lineHeight", mainStyle.lineHeight);
})
lessSpacing.addEventListener("click", function() {
    let height = parseInt(mainStyle.lineHeight) - 1;
    mainStyle.lineHeight = height + 'px';
    LocalStorageHandler("lineHeight", mainStyle.lineHeight);
})

const verdana = document.querySelector("#verdana");
const arial = document.querySelector("#arial");
const monospace = document.querySelector("#monospace");

verdana.addEventListener("click", function () {
    mainStyle.fontFamily = "verdana";
    LocalStorageHandler("fontFamily", "monospace");
})
arial.addEventListener("click", function () {
    mainStyle.fontFamily = "arial";
    LocalStorageHandler("fontFamily", "monospace");
})
monospace.addEventListener("click", function () {
    mainStyle.fontFamily = "monospace";
    LocalStorageHandler("fontFamily", "monospace");
})

function LocalStorageHandler (func, propertie) {
    if (localStorage.getItem(func) == "null") {
        localStorage.setItem(func, propertie);
    } else {
        localStorage.removeItem(func);
        localStorage.setItem(func, propertie);
    }
}



window.onload =function() {
    if (localStorage.getItem("background") == "sepia") {
        bodyStyle.backgroundColor = "#f7e3cf";
    } else if (localStorage.getItem("background") == "black") {
        bodyStyle.backgroundColor = "#3d3d3d";
    } else if (localStorage.getItem("background") == "white") {
        bodyStyle.backgroundColor = "#ffffff";
    }

    if (localStorage.getItem("fontColor") == "black") {
        bodyStyle.color = "#3d3d3d";
    } else if (localStorage.getItem("fontColor") == "white") {
        bodyStyle.color = "#ffffff";
    } else if (localStorage.getItem("fontColor") == "sepia") {
        bodyStyle.color = "#f7e3cf";
    }

    mainStyle.fontSize = localStorage.getItem("fontSize");

    mainStyle.lineHeight = localStorage.getItem("lineHeight");

    if (localStorage.getItem("fontFamily") == "verdana") {
        mainStyle.fontFamily = "verdana";
    } else if (localStorage.getItem("fontFamily") == "monospace") {
        mainStyle.fontFamily = "monospace";
    } else if (localStorage.getItem("fontFamily") == "arial") {
        mainStyle.fontFamily = "arial";
    }
}